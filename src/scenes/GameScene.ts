import { GameUI } from "../ui/GameUI";

export default class GameScene {
  private rootElement: HTMLDivElement;

  constructor(rootElement: HTMLDivElement) {
    this.rootElement = rootElement;
    this.init();
  }

  private init() {
    const gameUI = new GameUI(this.handleChoice.bind(this));
    this.rootElement.appendChild(gameUI.getElement());
  }

  private handleChoice(playerChoice: string) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = this.determineWinner(playerChoice, computerChoice);

    console.log(`Player: ${playerChoice} | Computer: ${computerChoice}`);
    console.log(`Result: ${result}`);
  }

  private determineWinner(player: string, computer: string): string {
    if (player === computer) {
      return "It's a tie!";
    }
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You win!";
    }
    return "Computer wins!";
  }
}
