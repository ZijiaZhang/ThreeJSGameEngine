import {Matrix4, Object3D, Scene} from "three";
import {SampleGameObject} from "./SampleGameObject";
import {TickObject} from "./TickObject";
import {GameObject, instanceOfGameObject} from "./Interfaces/GameObject";
import {Game} from "../Game";
import {Tickable} from "./Interfaces/Tickable";

export class GameScene {
    private scene: Scene;
    private tickableObjects: Set<Tickable> = new Set<Tickable>();

    constructor(scene: Scene) {
        this.scene = scene;
    }

    public addItem(object: Object3D): boolean {
        this.scene.add(object);
        if (instanceOfGameObject(object)) {
            let myObj: GameObject = object as unknown as GameObject;
            myObj.addScene(this);
        }
        return true;
    }

    public removeItem(object: Object3D): boolean {
        this.scene.remove(object);

        if (instanceOfGameObject(object)) {
            let myObj: GameObject = object as unknown as GameObject;
            myObj.destroy();
        }
        return true;
    }


    public getScene(): Scene {
        return this.scene;
    }

    public update() {
        for (let object of this.tickableObjects) {
            object.tick();
        }
    }

    public addTickable(object: Tickable) {
        this.tickableObjects.add(object);
    }

    public removeTickable(object: Tickable) {
        this.tickableObjects.delete(object);
    }
}