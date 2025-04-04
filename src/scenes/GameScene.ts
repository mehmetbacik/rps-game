import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  private choices: { [key: string]: { x: number; y: number } } = {
    rock: { x: 0.5, y: 0.8 },
    paper: { x: 0.2, y: 0.5 },
    scissors: { x: 0.8, y: 0.5 },
  };

  constructor() {
    super({ key: "GameScene" });
  }

  create() {
    const { width, height } = this.scale;

    // Add pentagon background
    this.add.image(width / 2, height / 2, "pentagon");

    // Add choice buttons
    Object.entries(this.choices).forEach(([choice, position]) => {
      const button = this.add
        .image(width * position.x, height * position.y, choice)
        .setInteractive()
        .setScale(0.5);

      button.on("pointerdown", () => {
        this.scene.start("UIScene", { playerChoice: choice });
      });

      // Add hover effect
      button.on("pointerover", () => {
        button.setScale(0.55);
      });

      button.on("pointerout", () => {
        button.setScale(0.5);
      });
    });
  }

  preload() {
    // Load assets
    this.load.image("pentagon", "/src/assets/bg-pentagon.svg");
    this.load.image("rock", "/src/assets/icon-rock.svg");
    this.load.image("paper", "/src/assets/icon-paper.svg");
    this.load.image("scissors", "/src/assets/icon-scissors.svg");
  }
}
