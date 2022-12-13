import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuButton from ".";

describe("Menu Button", () => {
  const mockOnClick = jest.fn();

  it("renders a button", () => {
    render(<MenuButton onClick={mockOnClick} />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

  it("has a hamburger menu icon", () => {
    render(<MenuButton onClick={mockOnClick} />);
    expect(screen.getByTitle("Menu")).toBeInTheDocument();
  });

  it("responds to an onClick Event", async () => {
    render(<MenuButton onClick={mockOnClick} />);
    const menuButton = screen.getByRole("button", { name: /menu/i });
    await userEvent.click(menuButton);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
