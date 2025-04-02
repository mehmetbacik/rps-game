import Phaser from 'phaser';

export class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    preload() {
        this.load.image('sky', 'assets/logo.svg');
    }

    create() {
        this.add.image(400, 300, 'sky');
        const startButton = this.add.text(300, 500, 'Click to Start', {
            font: '32px Arial',
            color: '#ffffff'
        });

        startButton.setInteractive();
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}
