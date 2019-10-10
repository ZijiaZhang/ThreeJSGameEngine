
import * as THREE from "three"
import {ViewPortManager} from "./ViewPortManager";
import {Scene, Vector3} from "three";

export class Game {
    public scenes: Array<Scene> = [];
    public canvas: HTMLElement;
    constructor() {

        this.scenes.push(new THREE.Scene());
        ViewPortManager.initialize(this.scenes[0], 90, new Vector3(0,0,0), new Vector3(0,1,0), new Vector3(0,0,-1));
         // set background colour

        // view angle, aspect ratio, near, far
        ViewPortManager.activeScene.add(ViewPortManager.camera);
        this.update();
    }

    public update(){
        ViewPortManager.render();
        requestAnimationFrame(()=>this.update());
    }
}