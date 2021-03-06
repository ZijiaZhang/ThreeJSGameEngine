import {Tickable} from "./Interfaces/Tickable";
import {Object3D} from "three";
import {GameObject} from "./Interfaces/GameObject";
import {GameScene} from "./GameScene";

export abstract class TickObject extends Object3D implements Tickable, GameObject {
    abstract tick(): void;

    public destroy(): boolean{
        if (this.gameScene) {
            let scene = this.gameScene;
            this.gameScene = null;
            scene.removeItem(this);
            scene.removeTickable(this);
            return true;
        }
        return false;
    }

    public addScene(scene: GameScene): boolean {
        this.gameScene = scene;
        scene.addTickable(this);
        return true;
    }

    gameScene: GameScene;
}
