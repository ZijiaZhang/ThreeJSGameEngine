import {viewPortManager} from "../src/modules/ViewPortManager";
import {Scene, Vector3} from "three";
import {expect} from "chai"

describe('ViewPortManager', function () {
    beforeEach(function () {
        let div = document.createElement("div");
        div.id = "canvas";
        document.body.appendChild(div);
       viewPortManager.initialize(new Scene(), 90, new Vector3(0,0,0), new Vector3(0,1,0), new Vector3(0,0,-1) );
    });
    it('should initialize fov correctly', function () {
        expect(viewPortManager.camera.fov).equal(90);
   });

    it('should initialize camera location correctly', function () {
        expect(viewPortManager.camera.position.x).equal(0);
        expect(viewPortManager.camera.position.y).equal(0);
        expect(viewPortManager.camera.position.z).equal(0);
    });

    it('should initialize camera up correctly', function () {
        expect(viewPortManager.camera.up.x).equal(0);
        expect(viewPortManager.camera.up.y).equal(1);
        expect(viewPortManager.camera.up.z).equal(0);
    });

    it('should initialize camera rotation correctly', function () {
        expect(viewPortManager.camera.rotation.x).equal(0);
        expect(viewPortManager.camera.rotation.y).equal(0);
        expect(viewPortManager.camera.rotation.z).equal(0);
    })
});