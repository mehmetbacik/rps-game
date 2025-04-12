import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { GameProvider } from "@/context/GameContext";
import Header from "@/components/Header";

// Helper component to provide context to the Header component
const renderWithContext = () => {
    return render(
      <GameProvider>
        <Header />
      </GameProvider>
    );
  };
  
  describe("Header Component", () => {
    it("renders correctly with 'classic' gameMode", () => {
      // Set the initial state for the context manually, or rely on the default state
      renderWithContext();
  
      // Test if the correct logo is displayed
      const logo = screen.getByAltText("Rock Paper Scissors");
      expect(logo).toHaveAttribute("src", "/images/logo.svg");
  
      // Test if the score is displayed correctly (assuming default score is 0)
      const scoreValue = screen.getByText("0"); // default score
      expect(scoreValue).toBeInTheDocument();
    });
  
    it("renders correctly with 'advanced' gameMode", () => {
      // Manually trigger the gameMode change for this test, if necessary
      renderWithContext();
  
      // Test if the correct logo is displayed for the 'advanced' mode
      const logo = screen.getByAltText("Rock Paper Scissors");
      expect(logo).toHaveAttribute("src", "/images/logo-bonus.svg");
  
      // Test if the score is displayed correctly
      const scoreValue = screen.getByText("0"); // default score
      expect(scoreValue).toBeInTheDocument();
    });
  
    it("displays 'Score' label", () => {
      renderWithContext();
  
      const scoreLabel = screen.getByText("Score");
      expect(scoreLabel).toBeInTheDocument();
    });
  });