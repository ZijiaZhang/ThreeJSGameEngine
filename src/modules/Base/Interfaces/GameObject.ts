import {GameScene} from "../GameScene";

export interface GameObject {
    gameScene: GameScene;
    destroy(): boolean;
    addScene(scene: GameScene): boolean;
}

export function instanceOfGameObject(object: any){
    return 'destroy' in object && 'addScene' in object;
}