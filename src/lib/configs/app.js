import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    Fog,
    Vector3,
    AxisHelper,
    GridHelper,
    AmbientLight,
    DirectionalLight
} from 'three';
import Stats from 'stats.js';
import OrbitControls from 'three-orbitcontrols';

class App {
    constructor() {
        this.config = this.getDefaultConfig();
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }

    /**
     * 获取默认配置
     */
    getDefaultConfig() {
        return {
            camera: {
                fov: 35,
                aspect: this.screenWidth / this.screenHeight,
                near: 1,
                far: 5000,
                position: {
                    x: 0,
                    y: 100,
                    z: 1500
                },
                lookAt: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            },
            renderer: {
                alpha: false,
                width: this.screenWidth,
                height: this.screenHeight,
                clearColor: 0xEFF2F7,
                clearAlpha: 1
            },
            light: {}
        }
    }

    /**
     * 初始化场景
     */
    initScene() {
        this.container = document.createElement( 'div' );
        document.body.appendChild( this.container );
        this.scene = new Scene();
        this.scene.fog = new Fog( 0xEFF2F7, 1500, 4000 );
    }

    /**
     * 初始化相机
     */
    initCamera() {
        const {fov, aspect, near, far, position, lookAt} = this.config.camera;
        const camera = new PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(position.x, position.y, position.z);
        camera.lookAt( new Vector3(lookAt.x, lookAt.y, lookAt.z) );
        this.camera = camera;
    }

    /**
     * 初始化WebGLRenderer
     */
    initRenderer() {
        const { alpha, width, height, clearColor, clearAlpha} = this.config.renderer;
        const renderer = new WebGLRenderer({
            antialias: true,
            alpha: alpha
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.setClearColor(this.scene.fog.color, clearAlpha);
        renderer.autoClear = false;
        renderer.sortObjects = false;
        renderer.domElement.style.position = "relative";
        this.container.appendChild(renderer.domElement);
        this.renderer = renderer;
    }

    /**
     * 初始化灯光
     */
    initLight() {
        const self = this;
        self.scene.add(new AmbientLight(0xffffff));
        // self.scene.add(new DirectionalLight(0xffffff, 0.6));
    }

    /**
     * 初始化FPS监视器
     * FPS: 最后一秒渲染出的帧数，FPS越高越流畅
     * MS: 渲染一帧需要的毫秒数
     * MB: 浏览器分配的内存
     */
    initStats() {
        const stats = new Stats();
        // 0: fps, 1: ms, 2: mb, 3+: custom
        stats.showPanel(0);
        this.stats = stats;
        this.container.appendChild(stats.dom);
    }

    /**
     * 初始化控制器
     */
    initControls() {
        // 轨道控制器
        const self = this;
        if (self.camera && self.renderer && self.renderer.domElement) {
            const orbit = new OrbitControls( self.camera );
            orbit.enablePan = false;
            // orbit.minDistance = 50.0;
            // orbit.maxDistance = 250.0;
            orbit.maxPolarAngle = Math.PI * 0.495;
            orbit.target.set( 0, 0, 0 );
        }
    }

    /**
     * 初始化App
     */
    initApp() {
        const self = this;
        self.initScene();
        self.initCamera();
        self.initLight();
        self.initRenderer();
        self.initControls();
        self.initStats();
    }

    /**
     * 渲染，同时更新统计信息
     */
    render() {
        const self = this;
        self.stats.update();
        self.renderer.clear();
        self.renderer.render(self.scene, self.camera);
    }

    /**
     * 增加辅助工具
     */
    addHelpers() {
        const axisSize = 100; // 坐标轴参考线长度
        const axisHelper = new AxisHelper(axisSize);
        this.scene.add(axisHelper);

        //网格长度100，分成100格
        const gridSize = 100;
        const divisions = 100;
        const gridHelper = new GridHelper(gridSize, divisions);
        this.scene.add(gridHelper);
    }
}

export default App;
