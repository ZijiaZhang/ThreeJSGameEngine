import {PerspectiveCamera, Vector3, WebGLRenderer} from "three"
import {GameScene} from "./GameScene";

class ViewPortManager{
    private activeScene: GameScene;
    private renderer: WebGLRenderer = new WebGLRenderer();
    private camera: PerspectiveCamera;
    private canvas: HTMLElement| null;
    private cameraFov: number;
    public initialize(scene: GameScene, cameraFov:number, cameraPos: Vector3, up: Vector3, lookAt: Vector3){
        this.canvas = document.getElementById("canvas");
        if(this.canvas == null){
            throw Error("No div Named 'canvas'");
        }
        this.activeScene = scene;
        this.renderer = new WebGLRenderer();
        this.canvas.appendChild(this.renderer.domElement);
        this.renderer.setClearColor(0x111166);
        this.cameraFov = cameraFov;
        this.camera = new PerspectiveCamera(this.cameraFov, 1, 0.1, 1000);
        this.camera.position.set(cameraPos.x,cameraPos.y,cameraPos.z);
        this.camera.up = up;
        this.camera.lookAt(lookAt);
        this.updateViewport();
        window.addEventListener('resize', this.updateViewport);
        this.activeScene.addItem(this.camera);
    }

    public setCameraFov(cameraFov: number){
        this.cameraFov = cameraFov;
        this.updateCamera();
    }

    public updateViewport(){
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.updateCamera();

    }

    public updateCamera(){
        this.camera.fov = this.cameraFov;
        this.camera.aspect = window.innerWidth/window.innerHeight;
        this.camera.updateProjectionMatrix();
    }

    public render(){
        this.activeScene.update();
        this.renderer.render(this.activeScene.getScene(),this.camera);
    }

    public swichScene(gameScene: GameScene) {
        this.activeScene.removeItem(this.camera);
        this.activeScene = gameScene;
        this.activeScene.addItem(this.camera);
    }

    public getCameraFov(): number {
        return this.cameraFov;
    }

    public getCamera(): PerspectiveCamera{
        return this.camera;
    }
}

export const viewPortManager = new ViewPortManager();