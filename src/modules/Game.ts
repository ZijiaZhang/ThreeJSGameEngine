
import * as THREE from "three"

export class Game {
    public scene: THREE.Scene;
    public renderer: THREE.WebGLRenderer;
    public canvas: HTMLElement;
    public camera: THREE.PerspectiveCamera;
    constructor() {
        this.canvas = document.getElementById("canvas");
        console.log(this.canvas);
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0x111166);  // set background colour
        this.canvas.appendChild(this.renderer.domElement);
        var cameraFov = 90;     // initial camera vertical field of view, in degrees
        // view angle, aspect ratio, near, far
        this.camera = new THREE.PerspectiveCamera(cameraFov, 1, 0.1, 1000);
        this.camera.position.set(0, 12, 30);
        this.camera.up = new THREE.Vector3(0, 1, 0);
        this.camera.lookAt(0, 0, 0);
        this.scene.add(this.camera);
        this.camera.updateProjectionMatrix();
        this.renderer.render(this.scene,this.camera);
        console.log(this);
        this.update();
    }

    public update(){
        this.renderer.render(this.scene,this.camera);
        requestAnimationFrame(()=>this.update());
    }
}