import {playerInput} from "../src/modules/Base/PlayerInput";
import {expect} from "chai";
import {ControlableObject} from "../src/modules/Base/ControlableObject";
import {SampleControlableObject} from "../src/tests/SampleControlableObject";

describe('ControlableObject', function () {
    let object: ControlableObject;
    beforeEach(()=>{
        object = new SampleControlableObject();
    });
    it('should receive input correctly', function () {
        object.tick();
        expect((object as SampleControlableObject).updated).equal(true);
    });
});