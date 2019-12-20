import {SampleGameObject} from "./SampleGameObject";
import {Controlable} from "./Interfaces/Controlable";
import {TickObject} from "./TickObject";
import {Vector3} from "three";
import {playerInput} from "./PlayerInput";

export abstract class ControlableObject extends TickObject implements Controlable{
    constructor() {
        super();
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