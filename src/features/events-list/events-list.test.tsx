import { screen, render, waitFor } from "@testing-library/react";
// import { addRecord } from "@utils/indexedDb";
import { addRecord, getAllRecord } from "../../utils/indexedDb";
import { mockEventInformation } from "test-constants/mockEvent";
import EventsList from ".";

describe("Events List Component", () => {
  beforeAll(async () => {
    await addRecord(mockEventInformation);
    await addRecord(mockEventInformation);
  });

  it("renders a list of the saved events", async () => {
    // events is retreived from the inside of the eventlist component, due to astro limitations
    // we could possibly add a new component "EventWrapper" to pass the events in the event list but that would be too much abstraction
    render(<EventsList />);

    await waitFor(() => expect(screen.getAllByRole("article")).toHaveLength(2));
  });
});
