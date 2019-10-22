
import {viewPortManager} from "./ViewPortManager";
import {Scene, Vector3} from "three";
import {GameScene} from "./GameScene";

export class Game {
    private scenes: Array<GameScene> = [];
    constructor(scene: Scene) {
        let gameScene = new GameScene(scene);
        this.scenes.push(gameScene);
        viewPortManager.initialize(gameScene, 90, new Vector3(0,0,0), new Vector3(0,1,0), new Vector3(0,0,-1));
        this.update();
    }

    public update(){
        viewPortManager.render();
        requestAnimationFrame(()=>this.update());
    }

    public getScenes(): GameScene[] {
        return this.scenes;
    }
}