import {ViewPortManager} from "../src/modules/ViewPortManager";
import {Scene, Vector3} from "three";
import {expect} from "chai"

describe('ViewPortManager', function () {
    beforeEach(function () {
        let div = document.createElement("div");
        div.id = "canvas";
        document.body.appendChild(div);
       ViewPortManager.initialize(new Scene(), 90, new Vector3(0,0,0), new Vector3(0,1,0), new Vector3(0,0,-1) );
    });
    it('should initialize fov correctly', function () {
        expect(ViewPortManager.camera.fov).equal(90);
   });

    it('should initialize camera location correctly', function () {
        expect(ViewPortManager.camera.position.x).equal(0);
        expect(ViewPortManager.camera.position.y).equal(0);
        expect(ViewPortManager.camera.position.z).equal(0);
    });
});