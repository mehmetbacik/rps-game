export type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock' | null;
export type GameMode = 'classic' | 'advanced';

export interface GameState {
  score: number;
  playerChoice: Choice;
  computerChoice: Choice;
  result: 'win' | 'lose' | 'draw' | null;
  gameMode: GameMode;
}

export interface GameContextType {
  state: GameState;
  setPlayerChoice: (choice: Choice) => void;
  resetGame: () => void;
  toggleGameMode: () => void;
  updateScore: () => void;
} 