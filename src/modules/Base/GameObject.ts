import {Matrix4, Mesh, Vector3} from "three";
import {GameScene} from "./GameScene";

export class GameObject{
    protected transformation: Vector3;
    protected rotation: Vector3;
    protected scale: Vector3;
    protected subMeshes: Mesh[] = [];
    protected subGameObjects: GameObject[] = [];
    protected gameScene: GameScene;
    protected matrix: Matrix4 = new Matrix4();

    private mesh:Mesh;
    private obj:GameObject;
    constructor(transformation:Vector3 = new Vector3(), rotation: Vector3 = new Vector3(), scale: Vector3 = new Vector3(1,1,1)){
        this.transformation = transformation;
        this.rotation = rotation;
        this.scale = scale;
    }
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
        mesh.matrixAutoUpdate = false;
    }

    public addSubGameObjects(obj: GameObject): boolean {
        if(obj.hasSubObject(this) || this === obj) {
            return false;
        }
        this.subGameObjects.push(obj);
        return true;
    }

    protected hasSubObject(obj: GameObject): boolean {
        return this.subGameObjects.includes(obj) || this.subGameObjects.reduce((acc, gobj) => acc || (gobj.hasSubObject(obj)), false);
    }

    public setGameScene(scene: GameScene) {
        this.gameScene = scene;
    }

    public getGameScene(): GameScene {
        return this.gameScene;
    }

    public updateObjectMatrix(parentMatrix: Matrix4){
        this.matrix.copy(parentMatrix);
        if(this.transformation.length()!= 0) {
            this.matrix.multiply(new Matrix4().makeTranslation(this.transformation.x, this.transformation.y, this.transformation.z));
        }
        if(this.rotation.length()!= 0) {
            this.matrix.multiply(new Matrix4().makeRotationX(this.rotation.x));
            this.matrix.multiply(new Matrix4().makeRotationY(this.rotation.y));
            this.matrix.multiply(new Matrix4().makeRotationZ(this.rotation.z));
        }
        this.matrix.multiply(new Matrix4().makeScale(this.scale.x, this.scale.y, this.scale.z));
        for (this.mesh of this.subMeshes) {
            this.mesh .matrix.copy(this.matrix);
            this.mesh .matrix.multiply(new Matrix4().makeTranslation(this.mesh .position.x,this.mesh .position.y,this.mesh .position.z));
            this.mesh .matrix.multiply(new Matrix4().makeRotationX(this.mesh .rotation.x));
            this.mesh .matrix.multiply(new Matrix4().makeRotationY(this.mesh .rotation.y));
            this.mesh .matrix.multiply(new Matrix4().makeRotationZ(this.mesh .rotation.z));
            this.mesh .matrix.multiply(new Matrix4().makeScale(this.mesh .scale.x, this.mesh .scale.y, this.mesh .scale.z));
            this.mesh .updateMatrixWorld();
        }

        for (this.obj of this.subGameObjects){
            this.obj .updateObjectMatrix(this.matrix);
        }
    }

    public setTransformation(trans: Vector3) {
        this.transformation = trans;
    }

    public setRotation(rot: Vector3) {
        this.rotation = rot;
    }

    public setScale(scale: Vector3) {
        this.scale = scale;
    }
    public getMatrix(){
        return this.matrix;
    }
}