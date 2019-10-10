import {PerspectiveCamera, Scene, Vector3, WebGLRenderer} from "three"

export class ViewPortManager{
    public static activeScene: Scene;
    public static renderer: WebGLRenderer;
    public static camera: PerspectiveCamera;
    private static canvas: HTMLElement| null;
    private static cameraFov: number;
    public static initialize(scene: Scene, cameraFov:number, cameraPos: Vector3, up: Vector3, lookAt: Vector3){
        ViewPortManager.canvas = document.getElementById("canvas");
        if(ViewPortManager.canvas == null){
            throw Error("No div Named 'canvas'");
        }
        ViewPortManager.activeScene = scene;
        ViewPortManager.renderer = new WebGLRenderer();
        ViewPortManager.canvas.appendChild(ViewPortManager.renderer.domElement);
        ViewPortManager.renderer.setClearColor(0x111166);
        ViewPortManager.cameraFov = cameraFov;
        ViewPortManager.camera = new PerspectiveCamera(ViewPortManager.cameraFov, 1, 0.1, 1000);
        ViewPortManager.camera.position.set(cameraPos.x,cameraPos.y,cameraPos.z);
        ViewPortManager.camera.up = up;
        ViewPortManager.camera.lookAt(lookAt);
        ViewPortManager.updateViewport();
        window.addEventListener('resize', ViewPortManager.updateViewport);
    }

    public static setCameraFov(cameraFov: number){
        ViewPortManager.cameraFov = cameraFov;
        ViewPortManager.updateCamera();
    }

    public static updateViewport(){
        ViewPortManager.renderer.setSize(window.innerWidth,window.innerHeight);
        ViewPortManager.updateCamera();
    }

    public static updateCamera(){
        ViewPortManager.camera.fov = ViewPortManager.cameraFov;
        ViewPortManager.camera.aspect = window.innerWidth/window.innerWidth;
        ViewPortManager.camera.updateProjectionMatrix();
    }

    public static render(){
        ViewPortManager.renderer.render(ViewPortManager.activeScene,ViewPortManager.camera);
    }

}