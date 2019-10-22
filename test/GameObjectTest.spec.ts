import {viewPortManager} from "../src/modules/ViewPortManager";
import {BoxGeometry, Mesh, MeshBasicMaterial, Scene, SphereGeometry, Vector3} from "three";
import {expect} from "chai";
import {GameObject} from "../src/modules/GameObject";
import {GameScene} from "../src/modules/GameScene";
import {MockScene} from "../src/tests/MockScene";

describe('GameObject', function () {
    let gameObject: GameObject;
    beforeEach(function () {
        gameObject = new GameObject();
    });

    it("should add simple meshes correctly", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.addSubMesh(mesh);
        expect(gameObject.getMeshes()).to.deep.equals([mesh]);
    });

    it("should add subObject with meshes correctly", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.addSubMesh(mesh);
        let gameObject1 = new GameObject();
        gameObject1.addSubGameObjects(gameObject);
        let geometry1 = new BoxGeometry(5,32,32);
        let material1 = new MeshBasicMaterial({color:0xffff00});
        let mesh1 = new Mesh(geometry1, material1);
        gameObject1.addSubMesh(mesh1);
        expect(gameObject1.getMeshes()).to.have.deep.members([mesh,mesh1]);
    });

    it("should not add subObject if the meshes cause cycle", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.addSubMesh(mesh);
        expect(gameObject.addSubGameObjects(gameObject)).false;
        let gameObject1 = new GameObject();
        gameObject1.addSubGameObjects(gameObject);
        expect(gameObject.addSubGameObjects(gameObject1)).false;
    });

    it("should not add subObject if the meshes cause cycle deeper", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.addSubMesh(mesh);
        expect(gameObject.addSubGameObjects(gameObject)).false;
        let gameObject1 = new GameObject();
        gameObject1.addSubGameObjects(gameObject);
        let gameObject2 = new GameObject();
        gameObject.addSubGameObjects(gameObject2)
        expect(gameObject2.addSubGameObjects(gameObject1)).false;
    });

    it("should destroy it self", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.addSubMesh(mesh);
        let scene: GameScene = new GameScene(new MockScene());
        scene.addItem(gameObject);
        gameObject.destroy();
        expect(gameObject.getGameScene()).equal(null);
        expect((scene.getScene() as MockScene).objects).to.deep.equals([]);
    });

    it("should do nothing if ", () => {
        let geometry = new SphereGeometry(5,32,32);
        let material = new MeshBasicMaterial({color:0xffff00});
        let mesh = new Mesh(geometry, material);
        gameObject.addSubMesh(mesh);
        expect( gameObject.destroy()).equal(false);
    });

});