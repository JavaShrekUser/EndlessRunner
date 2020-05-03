// Fishwire prefab
class Fishwire extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene, displayList, updateList
    }

    update() {
        // move wire left
        this.x -= 0.09;
        this.y += game.settings.spaceshipSpeed-1.52;

        // wraparound from left to right edge
        if (this.x <= 0-this.width) {
            this.reset();
        }

        if (this.y >= 190){
            this.y = -90;
        }
    }

    reset() {
        this.x = 600;
    }
}