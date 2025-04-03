import Phaser from "phaser";

export class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 3, "Rock Paper Scissors", {
        fontSize: "32px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const playButton = this.add
      .text(width / 2, height / 2, "Start Game", {
        fontSize: "24px",
        color: "#00ff00",
        backgroundColor: "#222",
        padding: { x: 10, y: 5 },
      })
      .setOrigin(0.5)
      .setInteractive();

    playButton.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}
