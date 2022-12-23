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
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
      {events?.map((event: EventEntry) => (
        <Event key={event.id} eventInformation={event} />
      ))}
    </div>
  );
};

export default EventsList;
