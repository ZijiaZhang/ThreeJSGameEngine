import {TickObject} from "../modules/Base/TickObject";

export class SampleTickObject extends TickObject{
    public tickCount = 0;
    tick(): void {
        this.tickCount++;
    }
}