import {Object3D, Scene} from "three";
import {GameObject} from "./GameObject";

export class GameScene {
    private scene: Scene;
    private gameObjects: GameObject[] = [];

    constructor(scene: Scene) {
        this.scene = scene;
    }

    public addItem(object: GameObject | Object3D): boolean {
        if (object instanceof Object3D) {
            this.scene.add(object);
            return true;
        } else {
            if (!this.gameObjects.includes(object)) {
                this.gameObjects.push(object);
                for (let obj of object.getMeshes()) {
                    this.scene.add(obj);
                }
                object.setGameScene(this);
            } else {
                return false;
            }
        }
    }

    public removeItem(object: GameObject | Object3D): boolean {
        if (object instanceof Object3D) {
            try {
                this.scene.remove(object);
            } catch (e) {
                return false;
            }
        } else {
            if(this.gameObjects.includes(object)) {
                this.gameObjects.splice(this.gameObjects.indexOf(object), 1);
                for (let obj of object.getMeshes()) {
                    this.scene.remove(obj);
                }
                object.destroy();
                return true;
            }
            return false;

        }


    }

    public getScene(): Scene {
        return this.scene;
    }
}