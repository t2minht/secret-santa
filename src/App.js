import './styles/styles.css';
import { readCousinData, writeCousinData } from "./dbActions";
import { initialize } from "./config";

initialize();
/*TO DO: 
  -Dynamic Checkboxes
  -Update Values w/ existing fields
  -Show Checkboxes based on family
  -Update Logo (Fix N and C Brats)
  -Add Authentication
  -Create Voice memo that says shame shame shame
  -Background music with just us singing

  -Future Debate (Secretsanta delivery) (Text or In-browser)
  -If Khoi and Tuong don't know what this means next year they owe me five dollars^
  
*/

function App() {
  var preferences="";
  return (
    <div className="App" >
      <div className="confirmContainer" id='confirmContainer'>
        <h1 className="confirmTitle"><b>CONFIRM?</b></h1>
        <p id='confirmCousin' className="confirmText"></p>
        <p className="confirmText">***PLEASE make sure this is you!!***</p>
        <p id='confirmHobbies' className="confirmText">Hobbies/Interests:</p>
        <p id='confirmPreferences' className="confirmText">Preferences:</p>
        <button id='verify' onClick={verify} className="confirmButton verify">YUP!</button>
        <button id='noConfirm' onClick={noConfirm} className="confirmButton noConfirm">Not yet..</button>
      </div>
      <form>
        <div className='title'></div> 
        <div className='formDiv familyDiv'>
          <label className='boldLabel' for="fam">Family: </label>
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
          <br></br>
          <label className='boldLabel' for="cousin"> Cousin: </label>
          <select id="cousin" name="cousin">
            <option className="cousinValue" value="none" selected>Cousin</option>
          </select>
          <label className='boldLabel' for="cousin"> *MAKE SURE YOU CHOOSE ONLY YOUR NAME! NOT ANYONE ELSE'S*:</label>
        </div>

        <div className='formDiv hobbiesDiv'>
          <label className='boldLabel' for="hobbies/interests">Hobbies/Interests: </label>
          <textarea id="hobbies/interests" name="hobbies/interests"></textarea>
        </div>

        <div className='formDiv preferencesDiv'>
          <label className='boldLabel'>Preferences *Your preference is not guranteed if multiple people reserve someone* DONT PICK YOURSELF OR YOUR FAM: </label>
          <div className="preferences">
            <div className='checkBox'>
            <label for='av1'>Anh-Viet</label>
            <input type='checkbox' id='av1' value={"Anh-Viet"} name='preference'></input>
            </div>
  
            <div className='checkBox'>
            <label for='av2'>Ai-Vy</label>
            <input type='checkbox' id='av2' value={"Ai-Vy"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='av3'>Ai-Van</label>
            <input type='checkbox' id='av3' value={"Ai-Van"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='av4'>Anh-Vu</label>
            <input type='checkbox' id='av4' value={"Anh-Vu"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='chris'>Chris</label>
            <input type='checkbox' id='chris' value={"Chris"} name='preference'></input>
            </div>
            
            <div className='checkBox'>
            <label for='pktk1'>Phuong</label>
            <input type='checkbox' id='pktk1' value={"Phuong"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='pktk2'>Khoi</label>
            <input type='checkbox' id='pktk2' value={"Khoi"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='pktk3'>Thao</label>
            <input type='checkbox' id='pktk3' value={"Thao"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='pktk4'>Khoa</label>
            <input type='checkbox' id='pktk4' value={"Khoa"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='tyna'>Tyna</label>
            <input type='checkbox' id='tyna' value={"Tyna"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='t1'>Thi</label>
            <input type='checkbox' id='t1' value={"Thi"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='t2'>Tuong</label>
            <input type='checkbox' id='t2' value={"Tuong"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='t3'>Thien-An</label>
            <input type='checkbox' id='t3' value={"Thien-An"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='t4'>Thai-Hien</label>
            <input type='checkbox' id='t4' value={"Thai-Hien"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='t5'>Thuan</label>
            <input type='checkbox' id='t5' value={"Thuan"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='h1'>David</label>
            <input type='checkbox' id='h1' value={"David"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='h2'>Madison</label>
            <input type='checkbox' id='h2' value={"Madison"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='h3'>Aidan</label>
            <input type='checkbox' id='h3' value={"Aidan"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='h4'>Brayson</label>
            <input type='checkbox' id='h4' value={"Brayson"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='m1'>Mai-Linh</label>
            <input type='checkbox' id='m1' value={"Mai-Linh"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='m2'>Thai-Binh</label>
            <input type='checkbox' id='m2' value={"Thai-Binh"} name='preference'></input>
            </div>
          </div>
        </div>
        <div className='submitButton '>
          <button onClick={submit} className='submit formDiv'>Submit!</button>
        </div>
      </form>
    </div>
  );
  function submit(event){
    var idList = new Array("av1", "av2", "av3", "av4", "chris", "pktk1", "pktk2", "pktk3", "pktk4", "tyna", "t1", "t2", "t3", "t4", "t5","h1", "h2", "h3", "h4", "m1", "m2");
      var preferenceList = "";
      for (let i = 0; i<idList.length;i++){
        var id = document.getElementById(idList[i]);
        if (id.checked){
          preferenceList+=id.value + ",";
        }
      }
      preferenceList=preferenceList.substring(0,preferenceList.length-1);
      preferences=preferenceList;
    if (document.getElementById("cousin").value=="none"){
      alert("SHAME SHAME SHAME\n\nPlease state who you are under the family and cousin dropdowns!");
    }
    else {
      document.getElementById("confirmCousin").innerHTML = "Who you are: "+ document.getElementById("cousin").value.bold();
      document.getElementById("confirmHobbies").innerHTML = "Hobbies/Interests: "+ document.getElementById("hobbies/interests").value.bold();
      document.getElementById("confirmPreferences").innerHTML = "Preferences: "+ preferenceList.bold();
      if (document.getElementById("hobbies/interests").value==""){
        document.getElementById("confirmHobbies").innerHTML = "Hobbies/Interests: NONE";
      }
      if (preferenceList==""){
        document.getElementById("confirmPreferences").innerHTML = "Preferences NONE";
      }
      document.getElementById("confirmContainer").classList.add("confirmContainerOff")
      document.getElementById("confirmContainer").classList.remove("confirmContainerOff");
      document.getElementById("confirmContainer").classList.add("confirmContainerOn");
    }
    event.preventDefault();
  }
  function noConfirm(){
    document.getElementById("confirmContainer").classList.remove("confirmContainerOn");
    document.getElementById("confirmContainer").classList.add("confirmContainerOff");
  }
  function verify(){
    document.getElementById("confirmContainer").classList.remove("confirmContainerOn");
    document.getElementById("confirmContainer").classList.add("confirmContainerOff");
    writeCousinData(document.getElementById("cousin").value, preferences, document.getElementById("hobbies/interests").value);
    alert("Very Good :)\n\nIf you would like to change any of your selections, resubmit the form under your name.\n\n*NOTE* This will override your entire previous submission, meaning you must resubmit items that you had previously entered if you would like to send it to the database!!!");
  }
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
    let defaultOption = new Option("Cousin","none");
    switch(memberIndex){
      case 1:
        cousinsOptions.add(defaultOption,undefined);
        for (let i=0;i<5;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 2:
        cousinsOptions.add(defaultOption,undefined);
        for (let i=5;i<10;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 3:
        cousinsOptions.add(defaultOption,undefined);
        for (let i=10;i<15;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 4:
        cousinsOptions.add(defaultOption,undefined);
        for (let i=15;i<19;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      case 5:
        cousinsOptions.add(defaultOption,undefined);
        for (let i=19;i<21;i++){
          let newOption = new Option(cousinsArr[i],cousinsArr[i]);
          cousinsOptions.add(newOption,undefined);
        }
        break;
      default:
        let newOption = new Option("Cousin","none");
        cousinsOptions.add(newOption,undefined);
        break;
    }
  }
}

export default App;
