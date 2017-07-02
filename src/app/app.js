import {
    BoxGeometry,
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
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
import './employer';

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

    /**
     * 需要绑定this，否则requestAnimationFrame再次调用时，this为undefined
     */
    animate() {
        super.render();
        window.requestAnimationFrame(this.animate);
    }
}
