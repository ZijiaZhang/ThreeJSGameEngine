import {ControlableObject} from "../Base/ControlableObject";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
import {Game} from "../Game";
import {playerInput} from "../Base/PlayerInput";

export class SimpleControlableCube extends ControlableObject{
    protected cube = new Mesh(new BoxGeometry(1,1,1), new MeshBasicMaterial({color:0xffff00}));
    protected speed = 10;
    constructor(){
        super();
        this.attach(this.cube);
    }

    tick(): void {
        super.tick();
    }

    updateInput(): void {
        if(playerInput.keyMap["w"]) {
            this.position.y = this.position.y + Game.getInstance().dt * this.speed;
        }
        if(playerInput.keyMap["s"]) {
            this.position.y = this.position.y - Game.getInstance().dt* this.speed;
        }
        if(playerInput.keyMap["a"]) {
            this.position.x = this.position.x - Game.getInstance().dt* this.speed;
        }
        if(playerInput.keyMap["d"]) {
            this.position.x = this.position.x + Game.getInstance().dt* this.speed;
        }
    }


}