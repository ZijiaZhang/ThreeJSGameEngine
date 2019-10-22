import {Object3D, Scene} from "three";
import {GameObject} from "./GameObject";

export class GameScene{
    private scene: Scene;

    constructor(scene: Scene){
        this.scene = scene;
    }

    public addItem(object: GameObject | Object3D) {
        if(object instanceof Object3D) {
            this.scene.add(object);
        } else {
            for (let obj of object.getMeshes()) {
                this.scene.add(obj);
            }
            object.setGameScene(this);
        }
    }

    public removeItem(object: GameObject | Object3D): boolean {
        try {
            if(object instanceof Object3D) {
                this.scene.remove(object);
            } else {
                for (let obj of object.getMeshes()) {
                    this.scene.remove(obj);
                }
                object.setGameScene(null);
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    public getScene(): Scene{
        return this.scene;
    }
}