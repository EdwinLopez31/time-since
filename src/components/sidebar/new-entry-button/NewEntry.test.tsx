import { render, screen } from "@testing-library/react";
import NewEntryButton from ".";

describe("New Entry Button", () => {
  it("renders an anchor tag", () => {
    render(<NewEntryButton />);
    expect(
      screen.getByRole("link", { name: /new entry/i })
    ).toBeInTheDocument();
  });

  it("has an href to new-entry", () => {
    render(<NewEntryButton />);

    const newEntryBtn = screen.getByRole("link", { name: /new entry/i });
    expect(newEntryBtn).toHaveAttribute("href", "/new-entry");
  });

  it("has a new entry icon", () => {
    render(<NewEntryButton />);
    expect(screen.getByTitle("New Entry")).toBeInTheDocument();
  });
});
