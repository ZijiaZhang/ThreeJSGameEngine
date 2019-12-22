import {Game} from "./Game"
import {BoxGeometry, MeshBasicMaterial, Scene, Vector3} from "three";
import {GameScene} from "./Base/GameScene";
import {SimpleRotatingCube} from "./examples/SimpleRotatingCube";
import {SimpleControlableCube} from "./examples/SimpleControlableCube";
import {viewPortManager} from "./Base/ViewPortManager";
import {playerInput} from "./Base/PlayerInput";
import {PhysiObjectCube} from "./examples/PhysiObjectCube";
const Physijs = require("physijs-webpack");
let scene = new Physijs.Scene();
let sampleScene = new GameScene(scene);

scene.addEventListener( 'update', function() {
    // the scene's physics have finished updating
    console.log("Updated");
});

// @ts-ignore
let Cube = new PhysiObjectCube(new BoxGeometry( 5, 5, 5 ),
    new MeshBasicMaterial({ color: 0x888888 }));
sampleScene.addItem(Cube);
Cube.position.z = -2;
let game = new Game(sampleScene);
document.addEventListener('keydown', (ev) => playerInput.onKeyPressed(ev, ev.key, true));
document.addEventListener('keyup', (ev) => playerInput.onKeyPressed(ev, ev.key, false));
viewPortManager.setCameraFov(45);
