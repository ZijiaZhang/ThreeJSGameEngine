import {ControlableObject} from "../modules/Base/ControlableObject";

export class SampleControlableObject extends ControlableObject{
    public updated: boolean = false;
    updateInput(): void {
        this.updated = true;
    }
}