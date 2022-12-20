import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button Component", () => {
  userEvent.setup();
  const buttonProps = {
    text: "test",
    onClick: jest.fn(),
  };

  it("shows the correct text", () => {
    render(<Button {...buttonProps} />);

    expect(
      screen.getByRole("button", { name: buttonProps.text })
    ).toBeInTheDocument();
  });

  it("responds to click event", async () => {
    render(<Button {...buttonProps} />);
    const btn = screen.getByRole("button", { name: buttonProps.text });

    await userEvent.click(btn);

    expect(buttonProps.onClick).toHaveBeenCalled();
  });
});
