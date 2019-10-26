import {GameObject} from "./GameObject";
import {Controlable} from "./Interfaces/Controlable";
import {TickObject} from "./TickObject";
import {Vector3} from "three";
import {playerInput} from "./PlayerInput";

export abstract class ControlableObject extends TickObject implements Controlable{
    constructor(transformation:Vector3 = new Vector3(), rotation: Vector3 = new Vector3(), scale: Vector3 = new Vector3(1,1,1)) {
        super(transformation,rotation,scale);
        playerInput.addControlable(this);
    }

    destroy(): boolean {
        playerInput.removeControlable(this);
        return super.destroy();
    }

    tick(): void {
        this.updateInput();
    }

    abstract updateInput(): void;
}