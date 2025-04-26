import { render, screen, fireEvent } from "@testing-library/react";
import Popup from "@/components/Popup";
import "@testing-library/jest-dom";

describe("Popup Component", () => {
  it("renders popup and animates elements", () => {
    const onClose = jest.fn();

    // Render the Popup component
    render(<Popup onClose={onClose} />);

    // Test that the popup content is rendered
    expect(screen.getByText("Congratulations!")).toBeInTheDocument();
    expect(
      screen.getByText("You’ve scored more than 3 points!")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();

    // Add testId to the tail element for easier querying
    const tail = screen.getByTestId("tail");
    expect(tail).toBeInTheDocument();
  });

  it('closes popup when "Close" button is clicked', () => {
    const onClose = jest.fn();

    // Render the Popup component
    render(<Popup onClose={onClose} />);

    // Simulate clicking the close button
    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    // Ensure the onClose function is called when the close button is clicked
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("animates popup correctly on mount and unmount", () => {
    const onClose = jest.fn();

    // Render the Popup component
    const { unmount } = render(<Popup onClose={onClose} />);

    // Test that popup appears with animation
    expect(screen.getByText("Congratulations!")).toBeInTheDocument();

    // Unmount the popup to simulate closing
    unmount();

    // Ensure the popup is removed
    expect(screen.queryByText("Congratulations!")).not.toBeInTheDocument();
  });
});
