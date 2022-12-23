import { toShortDateFormat } from "@utils/date/toShortDateFormat";

interface EventProps {
  eventInformation: EventEntry;
}
const Event = ({ eventInformation }: EventProps) => {
  return (
    <article className='p-4 divide-y-2 divide-time-since-black bg-time-since-white  text-time-since-black rounded'>
      <div className='space-y-1'>
        <h1 className='text-3xl tracking-wide font-semibold'>
          {eventInformation.eventName}
        </h1>
        <h2 className='text-lg pb-2'>
          {toShortDateFormat(eventInformation.eventDate)}
        </h2>
      </div>
      <p className='pt-2' role='paragraph'>
        {eventInformation.eventDescription}
      </p>
    </article>
  );
};

export default Event;
