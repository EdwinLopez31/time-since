import { screen, render } from "@testing-library/react";
import EventsList from ".";

describe("Events List Component", () => {
  it("renders a list of saved event", () => {
    render(<EventsList />);
  });
});
