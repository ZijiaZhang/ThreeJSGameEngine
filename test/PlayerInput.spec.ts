import {expect} from "chai"
import {playerInput} from "../src/modules/Base/PlayerInput";
import {SimpleControlableCube} from "../src/modules/examples/SimpleControlableCube";


describe('playerInput', function () {

    it('should receive input correctly',  ()=> {
        playerInput.onKeyPressed(null,"a",true);
        expect(playerInput.keyMap["a"]).equal(true);
    });

    it("should add controlable Corretly", ()=>{
        let object = new SimpleControlableCube();
        playerInput.onKeyPressed(null,"0",true);
        expect(playerInput.removeControlable(object)).equal(true);
    });

    it("should destroy controlable Corretly", ()=>{
        let object = new SimpleControlableCube();
        playerInput.onKeyPressed(null,"0",true);
        object.destroy();
        expect(playerInput.removeControlable(object)).equal(false);
    });
});