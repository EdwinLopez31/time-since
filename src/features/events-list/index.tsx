// import { getAllRecord } from "@utils/indexedDb";
import { getAllRecord } from "../../utils/indexedDb";
import { useEffect, useState } from "react";
import Event from "./event";

interface EventList {
  events: EventEntryList;
}

const EventsList = () => {
  const [events, setEvents] = useState<null | EventEntryList>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllRecord();
      setEvents(events);
    };
    fetchEvents();
  }, []);

  if (!events) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {events?.map((event: EventEntry) => (
        <Event key={event.id} eventInformation={event} />
      ))}
    </>
  );
};

export default EventsList;
