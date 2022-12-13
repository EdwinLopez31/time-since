import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button Component", () => {
  const buttonProps = {
    text: "test",
    onClick: jest.fn(),
  };

  it("shows the correct text", () => {
    render(<Button {...buttonProps} />);

    expect(screen.getByText(buttonProps.text)).toBeInTheDocument();
  });

  it("responds to click event", async () => {
    render(<Button {...buttonProps} />);
    const btn = screen.getByText(buttonProps.text);

    await userEvent.click(btn);

    expect(buttonProps.onClick).toHaveBeenCalled();
  });
});
