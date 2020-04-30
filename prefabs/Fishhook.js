// Hook prefab
class Fishhook extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene, displayList, updateList
    }

    update() {
        // move spaceship left
        this.x -= game.settings.spaceshipSpeed;

        // wraparound from left to right edge
        if (this.x <= 0-this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = 625;
        this.y = this. y -=50;
        if (this.y <= 100){
            this.y = 400;
        }
    }
}