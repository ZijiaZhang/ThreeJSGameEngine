
import * as THREE from "three"
import {viewPortManager} from "./ViewPortManager";
import {Scene, Vector3} from "three";

export class Game {
    public scenes: Array<Scene> = [];
    constructor() {

        this.scenes.push(new THREE.Scene());
        viewPortManager.initialize(this.scenes[0], 90, new Vector3(0,0,0), new Vector3(0,1,0), new Vector3(0,0,-1));
         // set background colour

        // view angle, aspect ratio, near, far
        viewPortManager.activeScene.add(viewPortManager.camera);
        this.update();
    }

    public update(){
        viewPortManager.render();
        requestAnimationFrame(()=>this.update());
    }
}