export let indexedDB = null;

export const connectToDB = () => {
  const request = window.indexedDB.open("time-since", 1);

  request.onerror = (event) => {
    console.error(`Database error: ${event.target!.errorCode}`);
  };

  request.onsuccess = (event) => {
    console.log("evt", event);
    indexedDB = event.target!.result;
  };
};
