import { getDatabase, ref, set, child, get } from "firebase/database";
import { initialize } from "./config";

initialize();
export function writeCousinData(name, preference, interests) {
  const db = getDatabase();
  set(ref(db, "cousin/" + name), {
    preference: preference,
    interests: interests,
  });
}
export function readCousinData(name) {
    const dbRef = ref(getDatabase());
    const cousin = 'cousin/' + name;
    get(child(dbRef, cousin)).then((data) => {
      if (data.exists()) {
        return data;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    return 0;
}
