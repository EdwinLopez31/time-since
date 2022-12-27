import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toast from ".";

describe("Toast Component", () => {
  userEvent.setup();

  it("renders a success toast component by default", () => {
    render(<Toast />);
    const toast = screen.getByRole("alert");
    expect(toast).toBeInTheDocument();
  });

  it("unmounts if closed by the user", async () => {
    render(<Toast variant='success' />);
    const toast = screen.getByRole("alert");
    const closeToastBtn = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeToastBtn);
    expect(toast).not.toBeInTheDocument();
  });

  it("unmounts after 2 seconds if not manually closed by the user", async () => {
    render(<Toast variant='success' />);

    await waitForElementToBeRemoved(screen.queryByRole("alert"), {
      timeout: 2100,
    });
  });

  describe("Success Toast", () => {
    it("renders the default success message when toast variant is success", () => {
      render(<Toast variant='success' />);
      const toast = screen.getByRole("paragraph");
      expect(toast).toHaveTextContent(/successfully/i);
    });

    it("renders the message prop properly when toast variant is success", () => {
      render(<Toast variant='success' message='Nice' />);
      const toast = screen.getByRole("paragraph");
      expect(toast).toHaveTextContent(/nice/i);
    });

    it("renders a happy face icon when when toast variant is success", () => {
      render(<Toast variant='success' message='Nice' />);
      const toast = screen.getByTitle(/happy face/i);
      expect(toast).toBeInTheDocument();
    });
  });

  describe("Error Toast", () => {
    it("renders the default failed message when toast variant is error", () => {
      render(<Toast variant='error' />);
      const toast = screen.getByRole("paragraph");
      expect(toast).toHaveTextContent(/error/i);
    });

    it("renders the message prop properly when toast variant is error", () => {
      render(<Toast variant='error' message='failure' />);
      const toast = screen.getByRole("paragraph");
      expect(toast).toHaveTextContent(/failure/i);
    });

    it("renders a sad face icon when when toast variant is error", () => {
      render(<Toast variant='error' message='failure' />);
      const toast = screen.getByTitle(/sad face/i);
      expect(toast).toBeInTheDocument();
    });
  });
});
