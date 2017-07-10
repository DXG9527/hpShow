import {
    BoxGeometry,
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
    TextureLoader,
    CanvasTexture,
    MeshPhongMaterial,
    PlaneBufferGeometry,
    Fog,
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

let floorHeight;
class Home extends App {
    constructor() {
        super();
        this.config = merge(this.getDefaultConfig(), {
            camera: {
                position: {
                    x: 4,
                    y: 8,
                    z: 16
                }
            }
        });
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
        let geometry = new PlaneBufferGeometry( 100, 100 );
        let	meshCanvas = new Mesh( geometry, materialCanvas );
        meshCanvas.rotation.x = - Math.PI / 2;
        meshCanvas.scale.set( 1000, 1000, 1000 );
        meshCanvas.position.y = floorHeight;

        this.scene.add(meshCanvas);
    };

    //add paintings
    addPaintings = () => {
        let self = this;
        let loader = new TextureLoader();
        loader.load(
            picture,
            function (texture) {
                let material = new MeshBasicMaterial( { color: 0xffffff, map: texture} );
                let image = texture.image;
                let geometry = new PlaneBufferGeometry(100, 100);
                let mesh = new Mesh(geometry, material);
                floorHeight = - 1.117 * image.height;
                mesh.scale.x = image.width / 100;
                mesh.scale.y = image.height / 100;
                // mesh.position.x = -((SCREEN_WIDTH - 1.1 * image.width)/2) + i*1.15 * image.width;
                mesh.position.z = 0;
                mesh.position.y = floorHeight/2
                self.scene.add(mesh);
            }
        );

        loader.minFilter = loader.magFilter = LinearFilter
        loader.mapping = UVMapping;

    };


    setStage = () => {
        this.scene.fog = new Fog( 0xEFF2F7, 1500, 4000 );

        // let geometry = new SphereGeometry(4, 64, 64);
        // let material = new MeshBasicMaterial({color: 0xffffff});
        // let mesh = new Mesh(geometry, material);
        // self.scene.add(mesh);
        this.addPaintings();
        this.addGroundMesh();
    };



    /**
     * 需要绑定this，否则requestAnimationFrame再次调用时，this为undefined
     */
    animate() {
        super.render();
        window.requestAnimationFrame(this.animate);
    }

    start() {
        super.initApp();
        this.setStage();
        this.animate();

    }
}

const home = new Home();
home.start();
