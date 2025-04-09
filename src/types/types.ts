export type Choice = 'rock' | 'paper' | 'scissors' | null;

export interface GameState {
  score: number;
  playerChoice: Choice;
  computerChoice: Choice;
  result: 'win' | 'lose' | 'draw' | null;
}

export interface GameContextType {
  state: GameState;
  setPlayerChoice: (choice: Choice) => void;
  resetGame: () => void;
} 