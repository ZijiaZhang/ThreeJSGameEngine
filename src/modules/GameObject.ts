import {Mesh} from "three";
import {GameScene} from "./GameScene";

export class GameObject{
    private subMeshes: Mesh[] = [];
    private subGameObjects: GameObject[] = [];
    private gameScene: GameScene;


    public destroy(): boolean{
        if (this.gameScene) {
            this.gameScene.removeItem(this);
            this.gameScene = null;
            return true;
        }
        return false;
    }

    public getMeshes(): Mesh[]{
        return this.subMeshes.concat(this.subGameObjects.reduce((acc,obj)=> acc.concat(obj.getMeshes()), []));
    }

    public addSubMesh(mesh: Mesh){
        this.subMeshes.push(mesh);
    }

    public addSubGameObjects(obj: GameObject): boolean {
        if(obj.hasSubObject(this) || this === obj) {
            return false;
        }
        this.subGameObjects.push(obj);
        return true;
    }

    private hasSubObject(obj: GameObject): boolean {
        return this.subGameObjects.includes(obj) || this.subGameObjects.reduce((acc, gobj) => acc || (gobj.hasSubObject(obj)), false);
    }

    public setGameScene(scene: GameScene) {
        this.gameScene = scene;
    }

    public getGameScene(): GameScene {
        return this.gameScene;
    }
}