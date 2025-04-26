import { render, screen, fireEvent } from "@testing-library/react";
import ChoiceButton from "@/components/ChoiceButton";

describe("ChoiceButton", () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with given type and position", () => {
    render(
      <ChoiceButton
        type="rock"
        position="rock-position"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("choice-button rock rock-position");
  });

  it("calls onClick when clicked", () => {
    render(
      <ChoiceButton
        type="paper"
        position="paper-position"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("displays loader when loading is true", () => {
    render(
      <ChoiceButton
        type="scissors"
        position="scissors-position"
        onClick={mockOnClick}
        loading
      />
    );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("adds winner class when isWinner is true", () => {
    render(
      <ChoiceButton
        type="lizard"
        position="lizard-position"
        onClick={mockOnClick}
        isWinner
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("winner");
  });

  it("renders correct image when loading is false", () => {
    render(
      <ChoiceButton
        type="spock"
        position="spock-position"
        onClick={mockOnClick}
      />
    );

    const image = screen.getByAltText("icon-type");
    expect(image).toHaveAttribute("src", expect.stringContaining("icon-spock"));
  });
});
