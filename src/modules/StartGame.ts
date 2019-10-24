import {Game} from "./Game"
import {Scene} from "three";
import {GameScene} from "./Base/GameScene";
import {SimpleRotatingCube} from "./examples/SimpleRotatingCube";
let sampleScene = new GameScene(new Scene());
sampleScene.addItem(new SimpleRotatingCube());
let game = new Game(sampleScene);
