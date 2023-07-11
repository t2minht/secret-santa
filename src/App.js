import './styles/styles.css';


function App() {
  return (
    <div className="App" >
      <div className="formContainer">
        <form>
          <label for="fam">Family: </label>
          {/*Family Choice*/}
          <select id="fam" name="family" onChange={changeName}>
            <option className="famValue" value="" selected>Family</option>
            <option className="famValue" value="tho" >Tho/Chau</option>
            <option className="famValue" value="huong" >Huong/Chin</option>
            <option className="famValue" value="thuy" >Thuy/Lam</option>
            <option className="famValue" value="nguyet" >Nguyet/David</option>
            <option className="famValue" value="ut" >Ut/Stephen</option>
          </select>
          <br></br>
          <label for="cousin">Cousin: </label>
          <select id="cousin" name="cousin">
            <option className="cousinValue" value="" selected>Cousin</option>
          </select>
        </form>
      </div>
    </div>
  );
  function changeName() {
    var getOptions = document.getElementsByClassName("famValue");
    var famArr = new Array(6);
    for (let i=0;i<famArr.length;i++){
      famArr[i]=getOptions[i].value;
    }
    var fam = document.getElementById("fam");
    var chosenMember = fam.value;
    let memberIndex = famArr.indexOf(chosenMember);
    var cousinsOptions = document.getElementById("cousin");
    while (cousinsOptions.length>0){
      cousinsOptions.remove(0);
    }
    const cousinsArr = new Array("Anh-Viet", "Ai-Vy", "Ai-Van", "Anh-Vu", "Chris", "Phuong", "Khoi", "Thao", "Khoa", "Tyna", "Thi", "Tuong", "Thien-An", "Thai-Hien", "Thuan", "David", "Madison", "Aidan", "Brayson", "Mai-Linh", "Thai-Binh")
    switch(memberIndex){
      case 1:
        for (let i=0;i<5;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 2:
        for (let i=5;i<10;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 3:
        for (let i=10;i<15;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 4:
        for (let i=15;i<19;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 5:
        for (let i=19;i<21;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      default:
        break;
    }
  }
}

export default App;
