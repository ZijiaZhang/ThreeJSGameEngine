import {GameObject} from "./Interfaces/GameObject";
import {GameScene} from "./GameScene";
import {Tickable} from "./Interfaces/Tickable";
// @ts-ignore
import {Mesh} from "physijs";

export abstract class PhysiObject extends Mesh implements GameObject, Tickable{
    gameScene: GameScene;

    abstract addScene(scene: GameScene): boolean;

    abstract destroy(): boolean;

    abstract tick(): void;

}