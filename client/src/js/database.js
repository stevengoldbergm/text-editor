import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Create connection to the database and select database version to use
  console.log('PUT to the database');
  // Create a new transaction specifying which database to use and the data privileges
  const jateDb = await openDB('jate', 1);
  // Create a new transaction specifying which database to use and the data privileges
  const transaction = jateDb.transaction('jate', 'readwrite');
  // Open the object store
  const store = transaction.objectStore('jate');
  // Use getAll() method to get all data in the database
  const request = store.put({content: content});
  // Get confirmation of the request
  const result = await request;
  console.log('Data saved!', result)
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  // Create connection to the database and select database version to use
  const jateDb = await openDB('jate', 1);
  // Create a new transaction specifying which database to use and the data privileges
  const transaction = jateDb.transaction('jate', 'readonly');
  // Open the object store
  const store = transaction.objectStore('jate');
  // Use getAll() method to get all data in the database
  const request = store.getAll();
  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
