import { render, screen } from "@testing-library/react";
import Sidebar from ".";

describe("Menu Button", () => {
  it("renders a sidebar", () => {
    render(<Sidebar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
