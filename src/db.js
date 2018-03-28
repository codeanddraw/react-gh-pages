import Dexie from 'dexie';

const db = new Dexie('ContactDB');
db.version(1).stores({ contacts: '++id,fname,lname,phone, email' });
export default db;