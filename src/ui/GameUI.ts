export class GameUI {
  private container: HTMLDivElement;
  private choices: string[] = ["rock", "paper", "scissors"];
  private onChoiceSelected: (choice: string) => void;

  constructor(onChoiceSelected: (choice: string) => void) {
    this.container = document.createElement("div");
    this.container.classList.add("game-container");

    const title = document.createElement("h1");
    title.textContent = "Rock, Paper, Scissors!";
    this.container.appendChild(title);

    const choicesDiv = document.createElement("div");
    choicesDiv.classList.add("choices");

    this.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => this.onChoiceSelected(choice);
      choicesDiv.appendChild(button);
    });

    this.container.appendChild(choicesDiv);
    this.onChoiceSelected = onChoiceSelected;
  }

  public getElement(): HTMLDivElement {
    return this.container;
  }
}
