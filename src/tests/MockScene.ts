import {Object3D, Scene} from "three";

export class MockScene extends Scene{
    public objects: Object3D[] = [];
    public add(...object: Object3D[]): this {
        object.forEach((o)=> this.objects.push(o));
        return this;
    }

    public remove(...object: Object3D[]): this {
        for (let obj of object){
            if(!this.objects.includes(obj)) {
                throw new Error("No Such Object");
            }
            this.objects.splice(this.objects.indexOf(obj),1);
        }
        return this;
    }
}