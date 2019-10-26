/// https://codeincomplete.com/posts/javascript-game-foundations-player-input/
import {Controlable} from "./Interfaces/Controlable";

class PlayerInput{
    public keyMap: {[key: string]: boolean} = {};
    public controlables: Controlable[] = [];

    public onKeyPressed(ev: KeyboardEvent, key: string, pressed: boolean) {
        this.keyMap[key] = pressed;
        for (let i of this.controlables){
            i.updateInput();
        }
    }

    public addControlable(object: Controlable){
        this.controlables.push(object);
    }

    public removeControlable(object:Controlable): boolean{
        let index = this.controlables.indexOf(object);
        if (index != -1) {
            this.controlables.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

}

export const playerInput = new PlayerInput();