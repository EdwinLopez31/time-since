import { screen, render, waitFor } from "@testing-library/react";
// import { addRecord, getRecord } from "@utils/indexedDb";
import { addRecord, getRecord } from "../../../utils/indexedDb";
import Event from ".";

const mockEventInformation = {
  eventName: "Sample Event Name",
  eventDate: "2022-12-17T11:10",
  eventDescription: "Sample Event Description",
};

describe("Events List Component", () => {
  beforeAll(async () => {
    await addRecord(mockEventInformation);
  });

  describe("renders a saved event information", () => {
    it("renders an article as a wrapper for the event", async () => {
      const event = await getRecord(1);

      render(<Event eventInformation={event} />);

      expect(screen.getByRole("article")).toBeInTheDocument();
    });

    it("renders an event's eventName", async () => {
      const event = await getRecord(1);

      render(<Event eventInformation={event} />);

      expect(
        screen.getByRole("heading", { name: mockEventInformation.eventName })
      ).toBeInTheDocument();
    });

    it("renders an event's date", async () => {
      const event = await getRecord(1);

      render(<Event eventInformation={event} />);

      expect(
        screen.getByRole("heading", { name: mockEventInformation.eventDate })
      ).toBeInTheDocument();
    });

    it("renders an event's description", async () => {
      const event = await getRecord(1);

      render(<Event eventInformation={event} />);

      expect(
        screen.getByRole("paragraph", {
          name: mockEventInformation.eventDescription,
        })
      ).toBeInTheDocument();
    });
  });
});
