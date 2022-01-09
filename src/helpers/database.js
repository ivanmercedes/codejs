import { LowSync, LocalStorage } from "lowdb";

const adapter = new LocalStorage("db");
const db = new LowSync(adapter);

const getDbData = () => {
  db.read();
  db.data ||= { codes: [] };
  db.write();
  return db.data.codes[0];
};

const setDbData = (data) => {
  db.read();
  db.data.codes[0] = data;
  db.write();

  return db.data.codes[0];
};

export { setDbData, getDbData };
