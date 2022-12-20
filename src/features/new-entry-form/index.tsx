// import InputField from "@components/form/input-field";
// import Button from "@components/button";
import InputField from "../../components/form/input-field";
import Button from "../../components/button/index";
import { useState } from "react";
import { connectToDB, indexedDB } from "utils/connectToIndexedDB";

const NewEntryForm = () => {
  //we could opt for a useReducer here, but since this is just a small form I opted for useState
  //we could also use an object for the state

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  // for large forms it is better to use uncontrolled components, because every keystroke triggers a rerender
  // I suggest using react-hook-form library

  const handleSubmit = (submitEvt: React.FormEvent<HTMLFormElement>) => {
    submitEvt.preventDefault();

    connectToDB();
  };

  return (
    <form
      name='Create Entry'
      title='Create Entry'
      className='flex flex-col gap-10'
      onSubmit={(submitEvt) => handleSubmit(submitEvt)}
    >
      <InputField
        name='eventName'
        id='Event_Name'
        placeholder='Event Name'
        required
        onChange={(inputEvt) => setEventName(inputEvt.target.value)}
        value={eventName}
      />
      <InputField
        max={new Date().toISOString().slice(0, -1)}
        type='datetime-local'
        placeholder='Event Date'
        name='eventDate'
        id='Event_Date'
        required
        onChange={(inputEvt) => setEventDate(inputEvt.target.value)}
        value={eventDate}
      />
      <InputField
        placeholder='Event Description'
        name='eventDescription'
        id='Event_Description'
        isTextArea
        required
        onChange={(inputEvt) => setEventDescription(inputEvt.target.value)}
        value={eventDescription}
      />
      <Button type='submit' text='Submit' />
    </form>
  );
};

export default NewEntryForm;
