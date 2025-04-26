import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { GameProvider } from "@/context/GameContext";
import Result from "@/components/Result";
import { useGame } from "@/context/GameContext";

// Mock the useGame hook
jest.mock("@/context/GameContext", () => ({
  ...jest.requireActual("@/context/GameContext"),
  useGame: jest.fn(),
}));

describe("Result Component", () => {
  it("renders correctly and shows result text after animation", async () => {
    // Mock implementation of useGame hook
    (useGame as jest.Mock).mockReturnValue({
      state: {
        playerChoice: "rock", // player choice
        computerChoice: "scissors", // computer choice
        result: "win", // result
        gameMode: "classic", // game mode
      },
      resetGame: jest.fn(),
      updateScore: jest.fn(),
    });

    render(
      <GameProvider>
        <Result />
      </GameProvider>
    );

    // Check if result text is rendered correctly
    expect(screen.getByText(/YOU WIN/)).toBeInTheDocument();
  });

  it("should trigger play again and reset the game", async () => {
    // Mock implementation of useGame hook
    const resetGameMock = jest.fn();
    (useGame as jest.Mock).mockReturnValue({
      state: {
        playerChoice: "rock",
        computerChoice: "scissors",
        result: "win",
        gameMode: "classic",
      },
      resetGame: resetGameMock,
      updateScore: jest.fn(),
    });

    render(
      <GameProvider>
        <Result />
      </GameProvider>
    );

    // Find and click "Play Again" button
    const playAgainButton = screen.getByText(/PLAY AGAIN/);
    fireEvent.click(playAgainButton);

    // Verify that resetGame function was called
    await waitFor(() => {
      expect(resetGameMock).toHaveBeenCalledTimes(1);
    });
  });

  it("should display loading animation for computer choice", () => {
    // Mock implementation of useGame hook
    (useGame as jest.Mock).mockReturnValue({
      state: {
        playerChoice: "rock",
        computerChoice: "scissors",
        result: "win",
        gameMode: "classic",
      },
      resetGame: jest.fn(),
      updateScore: jest.fn(),
    });

    render(
      <GameProvider>
        <Result />
      </GameProvider>
    );

    // Check if loading animation is displayed for the computer's choice
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/icon-rock.svg"
    );
  });
});
