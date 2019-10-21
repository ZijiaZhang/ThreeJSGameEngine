import {Scene} from "three";
import {GameObject} from "./GameObject";

export class GameScene{
    public scene: Scene;

    constructor(){
        this.scene = new Scene();
    }

    public addItem(object: GameObject) {
        for (let obj of object.getMeshes()) {
            this.scene.add(obj);
        }
    }
}