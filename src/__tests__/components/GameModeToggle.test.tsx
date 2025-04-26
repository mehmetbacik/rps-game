import { render, screen, fireEvent } from "@testing-library/react";
import { GameProvider } from "@/context/GameContext";
import GameModeToggle from "@/components/GameModeToggle";
import "@testing-library/jest-dom";

describe("GameModeToggle Component", () => {
  it("renders and toggles between classic and advanced game modes", () => {
    render(
      <GameProvider>
        <GameModeToggle />
      </GameProvider>
    );

    // Initial state should be "classic" mode
    expect(screen.getByLabelText("Toggle game mode")).not.toBeChecked();
    expect(screen.getByText("CLASSIC")).toHaveClass("mode-classic");
    expect(screen.getByText("ADVANCED")).toHaveClass("mode-advanced");

    // Toggle to "advanced" mode
    fireEvent.click(screen.getByLabelText("Toggle game mode"));

    // Now the state should be "advanced"
    expect(screen.getByLabelText("Toggle game mode")).toBeChecked();
    expect(screen.getByText("CLASSIC")).toHaveClass("mode-classic");
    expect(screen.getByText("ADVANCED")).toHaveClass("mode-advanced");

    // Toggle back to "classic" mode
    fireEvent.click(screen.getByLabelText("Toggle game mode"));

    // Back to "classic" mode
    expect(screen.getByLabelText("Toggle game mode")).not.toBeChecked();
    expect(screen.getByText("CLASSIC")).toHaveClass("mode-classic");
    expect(screen.getByText("ADVANCED")).toHaveClass("mode-advanced");
  });
});
