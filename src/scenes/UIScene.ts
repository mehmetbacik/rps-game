import Phaser from "phaser";

export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: "UIScene" });
  }

  create(data: { playerChoice: string }) {
    const { width, height } = this.scale;
    const choices = ["rock", "paper", "scissors"];
    const aiChoice = Phaser.Math.RND.pick(choices);

    this.add
      .text(width / 2, height / 4, `You chose: ${data.playerChoice}`, {
        fontSize: "20px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 3, `AI chose: ${aiChoice}`, {
        fontSize: "20px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const result = this.determineWinner(data.playerChoice, aiChoice);
    this.add
      .text(width / 2, height / 2, `Result: ${result}`, {
        fontSize: "24px",
        color:
          result === "Win"
            ? "#00ff00"
            : result === "Lose"
            ? "#ff0000"
            : "#ffffff",
      })
      .setOrigin(0.5);

    const currentScore = localStorage.getItem("score") || "0";
    const updatedScore = this.updateScore(
      result === "Win" ? 1 : result === "Lose" ? -1 : 0
    );

    this.add
      .text(width / 2, height / 1.5, `Score: ${updatedScore}`, {
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0.5);
  }

  determineWinner(player: string, ai: string): string {
    if (player === ai) return "Draw";
    if (
      (player === "rock" && ai === "scissors") ||
      (player === "scissors" && ai === "paper") ||
      (player === "paper" && ai === "rock")
    ) {
      return "Win";
    }
    return "Lose";
  }

  updateScore(change: number): number {
    const currentScore = parseInt(localStorage.getItem("score") || "0", 10);
    const newScore = currentScore + change;
    localStorage.setItem("score", newScore.toString());
    return newScore;
  }
}
