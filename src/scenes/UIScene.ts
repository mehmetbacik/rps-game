import Phaser from "phaser";

export default class UIScene extends Phaser.Scene {
  private resultText!: Phaser.GameObjects.Text;
  private playAgainButton!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: "UIScene" });
  }

  create(data: { playerChoice: string }) {
    const { width, height } = this.scale;
    const choices = ["rock", "paper", "scissors"];
    const aiChoice = Phaser.Math.RND.pick(choices);

    // Add background
    this.add.rectangle(0, 0, width, height, 0x000000, 0.5).setOrigin(0);

    // Add player and AI choices
    const playerChoice = this.add
      .image(width * 0.3, height * 0.5, data.playerChoice)
      .setScale(0.5);

    const aiChoiceImage = this.add
      .image(width * 0.7, height * 0.5, aiChoice)
      .setScale(0.5);

    // Add result text
    const result = this.determineWinner(data.playerChoice, aiChoice);
    this.resultText = this.add
      .text(width * 0.5, height * 0.3, result, {
        fontSize: "48px",
        color: "#ffffff",
        fontFamily: "Barlow Semi Condensed",
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    // Add play again button
    this.playAgainButton = this.add
      .text(width * 0.5, height * 0.7, "PLAY AGAIN", {
        fontSize: "16px",
        color: "#3b4363",
        fontFamily: "Barlow Semi Condensed",
        fontStyle: "600",
        backgroundColor: "#ffffff",
        padding: { x: 40, y: 15 },
      })
      .setOrigin(0.5)
      .setInteractive();

    this.playAgainButton.on("pointerdown", () => {
      this.scene.start("GameScene");
    });

    // Update score
    const scoreChange = result === "YOU WIN!" ? 1 : result === "YOU LOSE!" ? -1 : 0;
    this.updateScore(scoreChange);
  }

  preload() {
    // Load assets
    this.load.image("rock", "/src/assets/icon-rock.svg");
    this.load.image("paper", "/src/assets/icon-paper.svg");
    this.load.image("scissors", "/src/assets/icon-scissors.svg");
  }

  determineWinner(player: string, ai: string): string {
    if (player === ai) return "DRAW!";
    if (
      (player === "rock" && ai === "scissors") ||
      (player === "scissors" && ai === "paper") ||
      (player === "paper" && ai === "rock")
    ) {
      return "YOU WIN!";
    }
    return "YOU LOSE!";
  }

  updateScore(change: number) {
    const currentScore = parseInt(localStorage.getItem("score") || "0", 10);
    const newScore = currentScore + change;
    localStorage.setItem("score", newScore.toString());
    
    // Update score display
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.textContent = newScore.toString();
    }
  }
}
