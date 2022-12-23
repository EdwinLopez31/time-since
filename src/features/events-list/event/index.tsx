import React from "react";

interface EventProps {
  eventInformation: EventEntry;
}

const Event = ({ eventInformation }: EventProps) => {
  return (
    <article>
      <h1>{eventInformation.eventName}</h1>
      <h2>{eventInformation.eventDate}</h2>
      <p role='paragraph'>{eventInformation.eventDescription}</p>
    </article>
  );
};

export default Event;
