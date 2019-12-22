import {BoxGeometry, Matrix4, Mesh, MeshBasicMaterial, SphereGeometry, Vector3} from "three";
import {expect} from "chai";
import {SampleGameObject} from "../src/modules/Base/SampleGameObject";
import {GameScene} from "../src/modules/Base/GameScene";
import {MockScene} from "../src/tests/MockScene";
import {TickObject} from "../src/modules/Base/TickObject";
import {SimpleRotatingCube} from "../src/modules/examples/SimpleRotatingCube";
import {PhysiObjectCube} from "../src/modules/examples/PhysiObjectCube";
import {PhysiObject} from "../src/modules/Base/PhysiObject";

describe('GameObject', function () {
    let gameObject: PhysiObject;
    beforeEach(function () {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        // @ts-ignore
        gameObject = new PhysiObjectCube(geometry, material);
    });

    it("should destroy it self", () => {
        let scene: GameScene = new GameScene(new MockScene());
        scene.addItem(gameObject as unknown as Mesh);
        gameObject.destroy();
        expect(gameObject.gameScene).equal(null);
        expect((scene.getScene() as MockScene).objects).to.deep.equals([]);
    });

    it("should destroy it self if it is tick object", () => {
        let object = new SimpleRotatingCube();
        let scene: GameScene = new GameScene(new MockScene());
        scene.addItem(object);
        object.destroy();
        expect(object.gameScene).equal(null);
        expect((scene.getScene() as MockScene).objects).to.deep.equals([]);
    });

});