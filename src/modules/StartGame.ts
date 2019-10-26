import {Game} from "./Game"
import {Scene} from "three";
import {GameScene} from "./Base/GameScene";
import {SimpleRotatingCube} from "./examples/SimpleRotatingCube";
import {SimpleControlableCube} from "./examples/SimpleControlableCube";
import {viewPortManager} from "./Base/ViewPortManager";
import {playerInput} from "./Base/PlayerInput";
let sampleScene = new GameScene(new Scene());
sampleScene.addItem(new SimpleControlableCube());
let game = new Game(sampleScene);
document.addEventListener('keydown', (ev) => playerInput.onKeyPressed(ev, ev.key, true));
document.addEventListener('keyup', (ev) => playerInput.onKeyPressed(ev, ev.key, false));
viewPortManager.setCameraFov(45);
