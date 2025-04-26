import { render, screen, fireEvent } from '@testing-library/react';
import { GameProvider } from '@/context/GameContext';
import GameBoard from '@/components/GameBoard';
import '@testing-library/jest-dom';

describe('GameBoard Component', () => {
  it('renders the correct buttons based on the game mode', () => {
    render(
      <GameProvider>
        <GameBoard />
      </GameProvider>
    );

    // Test: "classic" game mode renders triangle background and 3 buttons
    expect(screen.getByAltText('Game mode')).toHaveAttribute('src', '/images/bg-triangle.svg');
    expect(screen.getByRole('button', { name: /rock/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /paper/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /scissors/i })).toBeInTheDocument();

    // Change game mode and verify advanced mode buttons
    fireEvent.click(screen.getByRole('button', { name: /spock/i }));

    // Test: "advanced" game mode renders pentagon background and 5 buttons
    expect(screen.getByAltText('Game mode')).toHaveAttribute('src', '/images/bg-pentagon.svg');
    expect(screen.getByRole('button', { name: /rock/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /paper/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /scissors/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /lizard/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /spock/i })).toBeInTheDocument();
  });

  it('displays Result component after player choice', () => {
    render(
      <GameProvider>
        <GameBoard />
      </GameProvider>
    );

    // Simulate player choice
    fireEvent.click(screen.getByRole('button', { name: /rock/i }));

    // Test: Result component is rendered
    expect(screen.getByText(/your-choice/i)).toBeInTheDocument();
  });
});
