import {TickObject} from "../Base/TickObject";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
import {Game} from "../Game";

export class SimpleRotatingCube extends TickObject{

    protected cube = new Mesh(new BoxGeometry(3,3,3), new MeshBasicMaterial({color:0xffff00}));
    constructor(){
        super();
        this.addSubMesh(this.cube);
    }

    tick(): void {
        this.cube.rotation.x = this.cube.rotation.x + Game.getInstance().dt;
        this.cube.rotation.y = this.cube.rotation.y + Game.getInstance().dt;
    }
}