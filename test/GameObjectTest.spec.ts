import {BoxGeometry, Matrix4, Mesh, MeshBasicMaterial, SphereGeometry, Vector3} from "three";
import {expect} from "chai";
import {SampleGameObject} from "../src/modules/Base/SampleGameObject";
import {GameScene} from "../src/modules/Base/GameScene";
import {MockScene} from "../src/tests/MockScene";
import {TickObject} from "../src/modules/Base/TickObject";
import {SimpleRotatingCube} from "../src/modules/examples/SimpleRotatingCube";

describe('GameObject', function () {
    let gameObject: SampleGameObject;
    beforeEach(function () {
        gameObject = new SampleGameObject();
    });

    it("should destroy it self", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.attach(mesh);
        let scene: GameScene = new GameScene(new MockScene());
        scene.addItem(gameObject);
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

    it("should do nothing if ", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.attach(mesh);
        expect( gameObject.destroy()).equal(false);
    });

});