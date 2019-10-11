import {PerspectiveCamera, Scene, Vector3, WebGLRenderer} from "three"

class ViewPortManager{
    public activeScene: Scene;
    public renderer: WebGLRenderer;
    public camera: PerspectiveCamera;
    private canvas: HTMLElement| null;
    private cameraFov: number;
    public initialize(scene: Scene, cameraFov:number, cameraPos: Vector3, up: Vector3, lookAt: Vector3){
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
    }

    public setCameraFov(cameraFov: number){
        this.cameraFov = cameraFov;
        this.updateCamera();
    }

    public updateViewport(){
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        this.updateCamera();
    }

    public updateCamera(){
        this.camera.fov = this.cameraFov;
        this.camera.aspect = window.innerWidth/window.innerWidth;
        this.camera.updateProjectionMatrix();
    }

    public render(){
        this.renderer.render(this.activeScene,this.camera);
    }
}

export const viewPortManager = new ViewPortManager();