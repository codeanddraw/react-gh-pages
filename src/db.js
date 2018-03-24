import Dexie from 'dexie';

const db = new Dexie('ContactDB');
db.version(1).stores({ contacts: '++id' });

export default db;