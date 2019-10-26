import {GameObject} from "./GameObject";
import {Tickable} from "./Interfaces/Tickable";

export abstract class TickObject extends GameObject implements Tickable {
    abstract tick(): void;
}
