//below are the read/write functions to use and the initialization of connecting to the database
import { readCousinData, writeCousinData } from "./dbActions";
import { initialize } from "./config";

initialize();
//readCousinData takes the first name of the cousin and returns everything
const data = await readCousinData("Thi");
function App() {
  //How to use the write function, it only takes the the preference and interests as input
  writeCousinData("Thi", "Thi's preference", "Thi's interests");
  return (
    <div className="App">
      <header className="App-header">secret santa</header>
      <div>Thi's Parent is {data.parent}</div>
    </div>
  );
}

export default App;
