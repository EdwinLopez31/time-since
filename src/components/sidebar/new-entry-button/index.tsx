import NewEntryIcon from "../../../icons/NewEntryIcon";
// import NewEntryIcon from "@icons/NewEntryIcon"

const NewEntryButton = () => {
  return (
    <a href='/new-entry' className='bg-time-since-dark-brown'>
      <NewEntryIcon className='w-8 h-8' />
    </a>
  );
};

export default NewEntryButton;
