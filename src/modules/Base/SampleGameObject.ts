import {Matrix4, Mesh, Object3D, Vector3} from "three";
import {GameScene} from "./GameScene";
import {GameObject} from "./Interfaces/GameObject";

export class SampleGameObject extends Object3D implements GameObject{
    protected subMeshes: Mesh[] = [];
    protected subGameObjects: SampleGameObject[] = [];
    gameScene: GameScene;

    public destroy(): boolean{
        if (this.gameScene) {
            let scene = this.gameScene;
            this.gameScene = null;
            scene.removeItem(this);
            return true;
        }
        return false;
    }

    public addScene(scene: GameScene): boolean {
        this.gameScene = scene;
        return true;
    }
}