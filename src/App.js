import './styles/styles.css';


function App() {
  return (
    <div className="App" >
      <div className='title'></div>
      <form>
      <div className="spaceDiv"></div>
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
          <label className='boldLabel' for="cousin"> Cousin: </label>
          <select id="cousin" name="cousin">
            <option className="cousinValue" value="" selected>Cousin</option>
          </select>
        </div>

        <div className='formDiv hobbiesDiv'>
          <label className='boldLabel' for="hobbies/interests">Hobbies/Interests: </label>
          <textarea id="hobbies/interests" name="hobbies/interests"></textarea>
        </div>

        <div className='formDiv preferencesDiv'>
          <label className='boldLabel'>Preferences *Your preference is not guranteed if multiple people reserve someone*: </label>
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
            <input type='checkbox' id='t1' value={"David"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='h2'>Madison</label>
            <input type='checkbox' id='t2' value={"Madison"} name='preference'></input>
            </div>

            <div className='checkBox'>
            <label for='h3'>Aidan</label>
            <input type='checkbox' id='t3' value={"Aidan"} name='preference'></input>
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
          <button onClick={submit}className='submit formDiv'>Submit!</button>
        </div>
      </form>
    </div>
  );
  function submit(){
    alert("Very Good :)\n\nIf you would like to change any of your selections, resubmit the form under your name.\n\n*NOTE* This will override your entire previous submission, meaning you must resubmit items that you had previously entered if you would like to send it to the database!!!")
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
        let newOption = new Option("Cousin","");
        cousinsOptions.add(newOption,undefined);
        break;
    }
  }
}

export default App;
