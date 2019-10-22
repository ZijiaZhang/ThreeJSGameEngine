
import {MockScene} from "../src/tests/MockScene";
import {expect} from "chai";
import {GameScene} from "../src/modules/GameScene";
import {GameObject} from "../src/modules/GameObject";
import {Mesh, MeshBasicMaterial, SphereGeometry} from "three";

describe('GameScene', function () {
    let gameScene: GameScene;
    beforeEach(function () {
        let div = document.createElement("div");
        div.id = "canvas";
        document.body.appendChild(div);
        gameScene = new GameScene(new MockScene());
    });
    it('should add GameObject Correctly', function () {
        let object: GameObject = new GameObject();
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        object.addSubMesh(mesh);
        gameScene.addItem(object);
        expect(object.getGameScene()).equal(gameScene);
        expect((gameScene.getScene() as MockScene).objects).to.deep.equals([mesh]);
    });

    it('should add Object3D Correctly', function () {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameScene.addItem(mesh);
        expect((gameScene.getScene() as MockScene).objects).to.deep.equals([mesh]);
    });

    it('should remove GameObject Correctly', function () {
        let object: GameObject = new GameObject();
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        object.addSubMesh(mesh);
        gameScene.addItem(object);
        gameScene.removeItem(object);
        expect(object.getGameScene()).equal(null);
        expect((gameScene.getScene() as MockScene).objects).to.deep.equals([]);
    });

    it('should remove Object3D Correctly', function () {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameScene.addItem(mesh);
        gameScene.removeItem(mesh);
        expect((gameScene.getScene() as MockScene).objects).to.deep.equals([]);
    });

    it('should not remove GameObject Correctly when object is not added', function () {
        let object: GameObject = new GameObject();
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        object.addSubMesh(mesh);
        expect(gameScene.removeItem(object)).equals(false);
    });

    it('should not remove Object3D When object is not added', function () {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        expect(gameScene.removeItem(mesh)).equals(false);
    });
});