import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MenuButton from "./MenuButton";

describe("Menu Button", () => {
  const mockOnClick = jest.fn();

  it("renders a button", () => {
    render(<MenuButton onClick={mockOnClick} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("has a hamburger menu icon", () => {
    render(<MenuButton onClick={mockOnClick} />);
    expect(screen.getByTitle("Menu")).toBeInTheDocument();
  });

  it("responds to an onClick Event", async () => {
    render(<MenuButton onClick={mockOnClick} />);
    const menuButton = screen.getByRole("button");
    await userEvent.click(menuButton);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
