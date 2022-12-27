import { screen, render } from "@testing-library/react";
// import { addRecord, getRecord } from "@utils/indexedDb";
// import { toShortDateFormat } from "@utils/date/toShortDateFormat";
import { addRecord, getRecord } from "../../../utils/indexedDb";
import Event from ".";
import { mockEventInformation } from "test-constants/mockEvent";
import { toShortDateFormat } from "../../../utils/date/toShortDateFormat";

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
        screen.getByRole("heading", {
          name: toShortDateFormat(mockEventInformation.eventDate),
        })
      ).toBeInTheDocument();
    });

    it("renders an event's description", async () => {
      const event = await getRecord(1);

      render(<Event eventInformation={event} />);

      expect(screen.getByRole("paragraph")).toHaveTextContent(
        event.eventDescription
      );
    });
  });
});
