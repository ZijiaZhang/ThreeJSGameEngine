import {viewPortManager} from "../src/modules/ViewPortManager";
import {Vector3} from "three";
import {expect} from "chai"
import {MockScene} from "../src/tests/MockScene";
import {GameScene} from "../src/modules/GameScene";

describe('ViewPortManager Error', function () {
    it('should throw error when Initialize if no canvas found', function () {
        document.body.innerHTML = '';
        try {
            viewPortManager.initialize(new GameScene(new MockScene()), 90, new Vector3(0,0,0), new Vector3(0,1,0), new Vector3(0,0,-1) );
            expect.fail("Should throw Error");
        } catch (e) {
            expect(e.message).equals("No div Named 'canvas'");
        }
    });
});

describe('ViewPortManager', function () {
    beforeEach(function () {
        document.body.innerHTML = '';
        let div = document.createElement("div");
        div.id = "canvas";
        document.body.appendChild(div);
       viewPortManager.initialize(new GameScene(new MockScene()), 90, new Vector3(0,0,0), new Vector3(0,1,0), new Vector3(0,0,-1) );
    });
    it('should initialize fov correctly', function () {
        expect(viewPortManager.getCamera().fov).equal(90);
   });

    it('should initialize camera location correctly', function () {
        expect(viewPortManager.getCamera().position.x).equal(0);
        expect(viewPortManager.getCamera().position.y).equal(0);
        expect(viewPortManager.getCamera().position.z).equal(0);
    });

    it('should initialize camera up correctly', function () {
        expect(viewPortManager.getCamera().up.x).equal(0);
        expect(viewPortManager.getCamera().up.y).equal(1);
        expect(viewPortManager.getCamera().up.z).equal(0);
    });

    it('should initialize camera rotation correctly', function () {
        expect(viewPortManager.getCamera().rotation.x).equal(0);
        expect(viewPortManager.getCamera().rotation.y).equal(0);
        expect(viewPortManager.getCamera().rotation.z).equal(0);
    });
    it('should change camera fov correctly', function () {
        viewPortManager.setCameraFov(60);
        expect(viewPortManager.getCamera().fov).equal(60);
        expect(viewPortManager.getCameraFov()).equal(60);
    });

    it('should switch datasets', function () {
        let scene = new GameScene(new MockScene());
       viewPortManager.swichScene(scene);
       expect((scene.getScene() as MockScene).objects).to.deep.equals([viewPortManager.getCamera()]);
    });
});


