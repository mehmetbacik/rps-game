import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {}

    create() {
        this.add.text(200, 150, 'Rock, Paper, Scissors Game', {
            font: '40px Arial',
            color: '#ffffff'
        });
    }

    update() {}
}
