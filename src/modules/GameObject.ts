import {Mesh} from "three";
import {GameScene} from "./GameScene";

export class GameObject{
    private subMeshes: Mesh[] = [];
    private subGameObjects: GameObject[] = [];
    private gameScene: GameScene;

    public destroy(){

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
}