import {MockScene} from "../src/tests/MockScene";
import {Game} from "../src/modules/Game";
import {expect} from "chai"
import {GameScene} from "../src/modules/Base/GameScene";

describe('Game', function () {
    let game: Game;
    beforeEach(function () {
        let div = document.createElement("div");
        div.id = "canvas";
        document.body.appendChild(div);
        game = new Game(new GameScene(new MockScene()));
    });
    it('should initialize fov correctly', function () {
        expect(game.getScenes().length).equal(1);
    });
});