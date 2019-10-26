import {ControlableObject} from "../Base/ControlableObject";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
import {Game} from "../Game";
import {playerInput} from "../Base/PlayerInput";

export class SimpleControlableCube extends ControlableObject{
    protected cube = new Mesh(new BoxGeometry(1,1,1), new MeshBasicMaterial({color:0xffff00}));
    protected speed = 10;
    constructor(){
        super();
        this.addSubMesh(this.cube);
    }

    tick(): void {
        super.tick();
    }

    updateInput(): void {
        if(playerInput.keyMap["w"]) {
            this.transformation.y = this.transformation.y + Game.getInstance().dt * this.speed;
        }
        if(playerInput.keyMap["s"]) {
            this.transformation.y = this.transformation.y - Game.getInstance().dt* this.speed;
        }
        if(playerInput.keyMap["a"]) {
            this.transformation.x = this.transformation.x - Game.getInstance().dt* this.speed;
        }
        if(playerInput.keyMap["d"]) {
            this.transformation.x = this.transformation.x + Game.getInstance().dt* this.speed;
        }
    }


}