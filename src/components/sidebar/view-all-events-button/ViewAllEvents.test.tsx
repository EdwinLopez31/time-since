import { render, screen } from "@testing-library/react";
import ViewAllEventsButton from ".";

describe("New Entry Button", () => {
  it("renders an anchor tag", () => {
    render(<ViewAllEventsButton />);
    expect(
      screen.getByRole("link", { name: /view all events/i })
    ).toBeInTheDocument();
  });

  it("has an href to new-entry", () => {
    render(<ViewAllEventsButton />);

    const viewAllEvtBtn = screen.getByRole("link", {
      name: /view all events/i,
    });
    expect(viewAllEvtBtn).toHaveAttribute("href", "/view-events");
  });

  it("has a view entries icon", () => {
    render(<ViewAllEventsButton />);
    expect(screen.getByTitle(/View All Events/i)).toBeInTheDocument();
  });
});
