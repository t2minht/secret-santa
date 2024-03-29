import { getDatabase, ref, update, child, get } from "firebase/database";

export function writeCousinData(name, preference, interests) {
  const db = getDatabase();
  const updates = {};
  updates["cousin/" + name + "/preferences"] = preference;
  updates["cousin/" + name + "/interests"] = interests;
  update(ref(db), updates);
}
export function assignSecretSanta(name, assignment) {
  const db = getDatabase();
  const updates = {};
  updates["cousin/" + name + "/recipient"] = assignment;
  update(ref(db), updates);
}
export async function readCousinData(name) {
  const dbRef = ref(getDatabase());
  var cousin = "cousin/" + name;
  return (await get(child(dbRef, cousin))).val();
}
