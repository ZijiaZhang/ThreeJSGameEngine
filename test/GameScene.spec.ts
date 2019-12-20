
import {MockScene} from "../src/tests/MockScene";
import {expect} from "chai";
import {GameScene} from "../src/modules/Base/GameScene";
import {SampleGameObject} from "../src/modules/Base/SampleGameObject";
import {Matrix4, Mesh, MeshBasicMaterial, SphereGeometry} from "three";
import {SimpleRotatingCube} from "../src/modules/examples/SimpleRotatingCube";
import {SampleTickObject} from "../src/tests/SampleTickObject";

describe('GameScene', function () {
    let gameScene: GameScene;
    beforeEach(function () {
        let div = document.createElement("div");
        div.id = "canvas";
        document.body.appendChild(div);
        gameScene = new GameScene(new MockScene());
    });
    it('should add GameObject Correctly', function () {
        let object: SampleGameObject = new SampleGameObject();
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        object.attach(mesh);
        gameScene.addItem(object);
        expect(object.gameScene).equal(gameScene);
        expect((gameScene.getScene() as MockScene).objects).to.deep.equals([object]);
    });

    it('should add Object3D Correctly', function () {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameScene.addItem(mesh);
        expect((gameScene.getScene() as MockScene).objects).to.deep.equals([mesh]);
    });

    it("should update Tick Object", () => {
        let object = new SampleTickObject();
        gameScene.addItem(object);
        gameScene.update();
        expect(object.tickCount).equal(1);
    });

});