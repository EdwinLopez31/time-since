import { render, screen } from "@testing-library/react";
import Sidebar from ".";

describe("Sidebar", () => {
  it("renders a sidebar", () => {
    render(<Sidebar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("has a menu button", () => {
    render(<Sidebar />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

  it("has a add new entry nav link", () => {
    render(<Sidebar />);
    expect(
      screen.getByRole("link", { name: /new entry/i })
    ).toBeInTheDocument();
  });

  it("has a view entries nav link", () => {
    render(<Sidebar />);
    expect(screen.getByRole("link", { name: /view /i })).toBeInTheDocument();
  });
});
