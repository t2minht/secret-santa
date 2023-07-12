import { getDatabase, ref, update, child, get } from "firebase/database";

export function writeCousinData(name, preference, interests) {
  const db = getDatabase();
  const updates = {};
  updates["cousin/" + name + '/preferences'] = preference;
  updates["cousin/" + name + '/interests'] = interests;
  update(ref(db), updates);
}
export function readCousinData(name) {
    const dbRef = ref(getDatabase());
    var cousin = 'cousin/' + name;
    let output;
    get(child(dbRef, cousin)).then((snapshot) => {
      if (snapshot.exists()) {
        output = snapshot.val().parent;
        console.log(output);
        return output;
      } else {
        console.log("No data available");
        return 0;
      }
    }).catch((error) => {
      console.error(error);
    });
    
}
