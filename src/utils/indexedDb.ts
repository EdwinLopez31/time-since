export let indexedDB: IDBDatabase | null = null;

// using event entry types directly instead of generics because for some reasons generic not detected in store.put
export const connectToDB: () => Promise<IDBOpenDBRequest> = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("time-since-db", 1);

    request.onerror = (event: any) => {
      reject(Error(event.target!.errorCode));
      console.error(`Database error: ${event.target!.errorCode}`);
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      const store = db.createObjectStore("events", {
        keyPath: "id",
        autoIncrement: true,
      });
      store.createIndex("eventName", ["eventName"], { unique: false });
      store.createIndex("eventDate", ["eventDate"], { unique: false });
      store.createIndex("eventDescription", ["eventDescription"], {
        unique: false,
      });
    };

    resolve(request);
  });
};

export const addRecord = (record: EventEntry) => {
  return new Promise(async (resolve, reject) => {
    const request = await connectToDB();

    request.onsuccess = () => {
      indexedDB = request.result;
      let transaction = indexedDB.transaction("events", "readwrite");
      let store = transaction.objectStore("events");

      const addRecord = store.put({
        eventName: record.eventName,
        eventDate: record.eventDate,
        eventDescription: record.eventDescription,
      });
      addRecord.onsuccess = () => {
        resolve("Successfully added a new record");
      };

      addRecord.onerror = () => {
        reject("An error has occured while adding a new record");
      };
    };

    request.onerror = () => {
      reject("An error has occured while adding a new record");
    };
  });
};

export const getAllRecord: () => Promise<EventEntryList> = async () => {
  return new Promise(async (resolve, reject) => {
    const request = await connectToDB();

    request.onsuccess = () => {
      indexedDB = request.result;
      let transaction = indexedDB.transaction("events", "readonly");
      let eventStore = transaction.objectStore("events");
      let getAllEvents = eventStore.getAll();

      getAllEvents.onsuccess = () => {
        resolve(getAllEvents.result);
      };

      getAllEvents.onerror = () => {
        reject("An error occured while fetching the data");
      };
    };

    request.onerror = () => {
      reject("An error occured while fetching the data");
    };
  });
};

export const deleteRecord = async (id: number) => {
  return new Promise(async (resolve, reject) => {
    const request = await connectToDB();

    request.onsuccess = () => {
      indexedDB = request.result;
      let transaction = indexedDB.transaction("events", "readwrite");
      let eventStore = transaction.objectStore("events");
      const deleteEvent = eventStore.delete(id);

      deleteEvent.onsuccess = () => {
        resolve("Successfully Deleted Record");
      };

      deleteEvent.onerror = () => {
        reject("An error occured while fetching the data");
      };
    };

    request.onerror = () => {
      reject("An error occured while deleting the data");
    };
  });
};

export const getRecord: (id: number) => Promise<EventEntry> = async (
  id: number
) => {
  return new Promise(async (resolve, reject) => {
    const request = await connectToDB();

    request.onsuccess = () => {
      indexedDB = request.result;
      let transaction = indexedDB.transaction("events", "readonly");
      let eventStore = transaction.objectStore("events");
      let selectedEvent = eventStore.get(id);

      selectedEvent.onsuccess = () => {
        resolve(selectedEvent.result);
      };

      selectedEvent.onerror = () => {
        reject("An error occured while fetching the data");
      };
    };

    request.onerror = () => {
      reject("An error occured while fetching the data");
    };
  });
};
