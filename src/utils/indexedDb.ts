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
      store.put({
        eventName: record.eventName,
        eventDate: record.eventDate,
        eventDescription: record.eventDescription,
      });

      resolve("Successfully added a new record");
    };

    request.onerror = () => {
      reject("An error has occured while adding a new record");
    };
  });
};
export const getAllRecord = async (results: Object[]) => {
  return new Promise(async (resolve, reject) => {
    const request = await connectToDB();

    request.onsuccess = () => {
      indexedDB = request.result;
      let transaction = indexedDB.transaction("events", "readonly");
      let store = transaction.objectStore("events");
      let cursor = store.openCursor();

      cursor.onsuccess = () => {
        const records = cursor.result;

        if (records) {
          results.push(records.value);
          records.continue();
        }
      };

      resolve("Successfully retrieved all the records");
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
      let store = transaction.objectStore("events");
      store.delete(id);

      resolve("Successfully Deleted Record");
    };

    request.onerror = () => {
      reject("An error occured while deleting the data");
    };
  });
};

export const getRecord = async (id: number, result: Object[]) => {
  return new Promise(async (resolve, reject) => {
    const request = await connectToDB();

    request.onsuccess = () => {
      indexedDB = request.result;
      let transaction = indexedDB.transaction("events", "readonly");
      let store = transaction.objectStore("events");
      let cursor = store.openCursor(id);

      cursor.onsuccess = () => {
        const record = cursor.result;
        if (record) {
          result.push(record.value);
        }
      };
      resolve("Successfully Retrieved Record");
    };

    request.onerror = () => {
      reject("An error occured while fetching the data");
    };
  });
};
