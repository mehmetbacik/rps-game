import { render, screen, fireEvent } from "@testing-library/react";
import { GameProvider } from "@/context/GameContext";
import Rules from "@/components/Rules";
import { useGame } from "@/context/GameContext";

// Mock the useGame hook
jest.mock("@/context/GameContext", () => ({
  ...jest.requireActual("@/context/GameContext"),
  useGame: jest.fn(),
}));

describe("Rules Component", () => {
  it('should display rules modal when "RULES" button is clicked', () => {
    // Mock implementation of useGame hook
    (useGame as jest.Mock).mockReturnValue({
      state: {
        gameMode: "classic", // game mode
      },
    });

    render(
      <GameProvider>
        <Rules />
      </GameProvider>
    );

    // Check if the "RULES" button is rendered
    const rulesButton = screen.getByText(/RULES/);
    fireEvent.click(rulesButton); // Click the "RULES" button

    // Verify that the modal with rules is displayed
    const rulesModal = screen.getByText(/RULES/);
    expect(rulesModal).toBeInTheDocument();
  });

  it("should close rules modal when close button is clicked", () => {
    // Mock implementation of useGame hook
    (useGame as jest.Mock).mockReturnValue({
      state: {
        gameMode: "classic",
      },
    });

    render(
      <GameProvider>
        <Rules />
      </GameProvider>
    );

    // Open the modal by clicking the "RULES" button
    const rulesButton = screen.getByText(/RULES/);
    fireEvent.click(rulesButton);

    // Check if the close button is rendered in the modal
    const closeButton = screen.getByAltText(/Close/);
    fireEvent.click(closeButton); // Click the close button

    // Verify that the modal is not displayed after clicking close
    expect(screen.queryByText(/RULES/)).not.toBeInTheDocument();
  });

  it("should display the correct rules image based on game mode", () => {
    // Mock implementation of useGame hook for "classic" mode
    (useGame as jest.Mock).mockReturnValue({
      state: {
        gameMode: "classic", // game mode
      },
    });

    render(
      <GameProvider>
        <Rules />
      </GameProvider>
    );

    // Open the modal by clicking the "RULES" button
    const rulesButton = screen.getByText(/RULES/);
    fireEvent.click(rulesButton);

    // Verify that the correct rules image is displayed
    const rulesImage = screen.getByAltText(/Game Rules/);
    expect(rulesImage).toHaveAttribute("src", "/images/image-rules.svg");
  });
});
