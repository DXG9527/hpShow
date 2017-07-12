import {
    BoxGeometry,
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
    Font,
    TextureLoader,
    CanvasTexture,
    MeshPhongMaterial,
    PlaneBufferGeometry,
    TextGeometry,
    RepeatWrapping,
    LinearFilter,
    UVMapping,
    Geometry,
    Vector2,
    Vector3,
    Object3D,
    Raycaster,
    MeshLambertMaterial,
    ImageUtils,
    LineSegments
} from 'three';
import dat from 'dat.gui/build/dat.gui';
import sweetAlert from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
import {merge} from '../lib/utils/object';
import {default as App} from '../lib/configs/app';
import picture from '../assets/images/picture.jpg';
import chinese from '../assets/font/chinese.json';

let floorHeight = 0;
class Home extends App {
    constructor() {
        super();
        this.config = merge(this.getDefaultConfig(), {
            camera: {
                position: {
                    z: 1500
                }
            }
        });
        this.geometry = new PlaneBufferGeometry(100, 100);
        this.mouse = new Vector2();
        this.mouseX = 0;
        this.mouseY = 0;
        this.raycaster = new Raycaster();
        this.animate = this.animate.bind(this);
    }

    // GROUND
    addGroundMesh = () => {
        let imageCanvas = document.createElement( "canvas" );
        let context = imageCanvas.getContext( "2d" );
        imageCanvas.width = imageCanvas.height = 128;

        context.fillStyle = "#444";
        context.fillRect( 0, 0, 128, 128 );

        context.fillStyle = "#fff";
        context.fillRect( 0, 0, 64, 64 );
        context.fillRect( 64, 64, 64, 64 );

        let textureCanvas = new CanvasTexture( imageCanvas );
        textureCanvas.needsUpdate = true;
        textureCanvas.repeat.set( 1000, 1000 );
        textureCanvas.wrapS = textureCanvas.wrapT = RepeatWrapping;

        let materialCanvas = new MeshPhongMaterial( { map: textureCanvas } );
        let	meshCanvas = new Mesh( this.geometry, materialCanvas );
        meshCanvas.rotation.x = - Math.PI / 2;
        meshCanvas.scale.set( 1000, 1000, 1000 );
        meshCanvas.position.y = floorHeight;

        this.scene.add(meshCanvas);
    };

    //add paintings
    addPaintings = (i) => {
        let texture = new TextureLoader().load(picture);
        texture.minFilter = texture.magFilter = LinearFilter;
        texture.mapping = UVMapping;
        let image = texture.image;
        floorHeight = - 1.117 * image.height;
        let material = new MeshBasicMaterial( { color: 0xffffff, map: texture} );
        let mesh = new Mesh(this.geometry, material);
        mesh.name = 'picture_' + i;
        mesh.scale.x = (image.width / 100) || 2;
        mesh.scale.y = (image.height / 100) || 2;
        mesh.position.x = -((this.screenWidth - (image.width || 200))/2) + i*1.15 * (image.width || 200);
        mesh.position.z = 0;
        mesh.position.y = floorHeight/2;
        this.scene.add(mesh);

        this.addLabel(mesh.name, new Vector3( mesh.position.x - 50, -0.117 * image.height + 50, 0 ));
    };

    // add label
    addLabel = (text, location) => {
        let textGeo = new TextGeometry( text, {
            font: new Font(chinese),
            size: 20,
            height: 1,
            curveSegments: 1
        });
        let textMaterial = new MeshBasicMaterial( { color: 0x000000 } );
        let textMesh = new Mesh( textGeo, textMaterial );
        textMesh.position.copy( location );
        this.scene.add( textMesh );
    };

    //add wall
    addWall = () => {
        let materialWall = new MeshPhongMaterial( { color: 0x8eb5e4, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 5 } );
        let meshWall = new Mesh( this.geometry, materialWall );
        meshWall.scale.set( 1000, 10, 1 );
        meshWall.receiveShadow = true;
        meshWall.position.set(0,0,-150);
        this.scene.add(meshWall);
    };

    setStage = () => {
        let pictureList = [ 0, 1, 2, 3, 4 ];
        for (let i=0; i<pictureList.length; i++) {
            this.addPaintings(i);
        }

        this.addWall();
        this.addGroundMesh();
    };

    onDocumentMouseMove = (event) => {
        event.preventDefault();
        this.mouseX = ( event.clientX - this.screenWidth/2 );
        this.mouseY = ( event.clientY - this.screenHeight/2 );
        this.mouse.x = ( event.clientX / this.screenWidth ) * 2 - 1;
        this.mouse.y = - ( event.clientY / this.screenHeight ) * 2 + 1;
    };

    onWindowResize = (event) => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    };

    renderUpdate = () => {
        this.camera.position.x += ( this.mouseX - this.camera.position.x ) * .05;
        this.camera.position.y += ( - ( this.mouseY - 200) - this.camera.position.y ) * .05;
        this.camera.lookAt( this.scene.position );
        this.camera.updateMatrixWorld();

        this.raycaster.setFromCamera( this.mouse, this.camera);
        let intersects = this.raycaster.intersectObjects( this.scene.children, true);
        if (intersects.length > 0) {
            let currObj = intersects[0].object;
        }
        super.render();
    };

    /**
     * 需要绑定this，否则requestAnimationFrame再次调用时，this为undefined
     */
    animate() {
        this.renderUpdate();
        window.requestAnimationFrame(this.animate);
    }

    start() {
        super.initApp();
        document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
        window.addEventListener( 'resize', this.onWindowResize, false );
        this.setStage();
        this.animate();

    }
}

const home = new Home();
home.start();
