import {GameObject} from "../Base/Interfaces/GameObject";
import {GameScene} from "../Base/GameScene";
import {Tickable} from "../Base/Interfaces/Tickable";
// @ts-ignore
import {BoxMesh} from "../physijs";
import {PhysiObject} from "../Base/PhysiObject";

export class PhysiObjectCube extends BoxMesh implements GameObject, Tickable, PhysiObject{
    gameScene: GameScene;

    addScene(scene: GameScene): boolean {
        this.gameScene = scene;
        scene.addTickable(this);
        return true;
    }

    destroy(): boolean {
        if (this.gameScene) {
            let scene = this.gameScene;
            this.gameScene = null;
            // @ts-ignore
            scene.removeItem(this);
            scene.removeTickable(this);
            return true;
        }
        return false;
    }

    tick(){
        //this.rotation.x += 0.01;
        (this.gameScene.getScene() as Physijs.Scene).simulate();
    };

}