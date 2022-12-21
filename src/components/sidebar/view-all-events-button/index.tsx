import ViewAllEventsIcon from "../../../icons/ViewAllEventsIcon";
// import ViewAllEventsIcon from "@icons/ViewAllEventsIcon"
const ViewAllEventsButton = () => {
  return (
    <a href='/view-events' className='bg-time-since-dark-brown'>
      <ViewAllEventsIcon className='w-8 h-8' />
    </a>
  );
};

export default ViewAllEventsButton;
