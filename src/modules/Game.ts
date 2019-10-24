
import {viewPortManager} from "./Base/ViewPortManager";
import {Vector3} from "three";
import {GameScene} from "./Base/GameScene";
import Stats = require('stats.js');

export class Game {
    private scenes: Array<GameScene> = [];
    private stat = new Stats();
    private oldTime = 0;
    private newTime = 0;
    public dt = 0;
    private static game :Game;

    constructor(scene: GameScene) {
        let gameScene = scene;
        this.scenes.push(gameScene);
        viewPortManager.initialize(gameScene, 90, new Vector3(0,0,5), new Vector3(0,1,0), new Vector3(0,0,-1));
        document.body.appendChild( this.stat.dom );
        Game.game = this;
        this.update();
    }

    public update(){
        this.stat.begin();
        viewPortManager.render();
        this.oldTime = this.newTime;
        this.newTime = this.stat.end();
        this.dt = (this.newTime - this.oldTime)/1000;
        requestAnimationFrame(()=>this.update());
    }

    public getScenes(): GameScene[] {
        return this.scenes;
    }

    public static getInstance(): Game{
        return this.game;
    }
}