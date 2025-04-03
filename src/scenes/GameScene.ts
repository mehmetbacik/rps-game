import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 5, "Choose Your Move:", {
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const choices = ["rock", "paper", "scissors"];

    choices.forEach((choice, index) => {
      const button = this.add
        .text(width / 2, height / 2 + index * 50, choice.toUpperCase(), {
          fontSize: "20px",
          color: "#ffffff",
          backgroundColor: "#444",
          padding: { x: 10, y: 5 },
        })
        .setOrigin(0.5)
        .setInteractive();

      button.on("pointerdown", () => {
        console.log(`Player chose: ${choice}`);
        this.scene.start("UIScene", { playerChoice: choice });
      });
    });
  }
}
