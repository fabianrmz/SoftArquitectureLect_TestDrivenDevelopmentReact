
import './App.css';

import { useState, React } from 'react';
import InputBox from './components/InputBox/InputBox';
import Character from './components/Character/Character';
import { Row, Button} from 'react-bootstrap';

function App() {
  const [myList, SetMyList] = useState([]);
  const [inpString, setInpString] = useState("");
  const [alert, setAlert] = useState("");

  const getSizehandler = () => {
    return myList.length;
  }
  const clearListHandler = () => {
    SetMyList([])
  }
  const addItemHandler = (e) => {
    if(inpString){
      const newList = [...myList, (inpString)];
      SetMyList(newList);
      setInpString("")
      
    }
  }

  const checkIfExistsHandler = () => {
    if(inpString){
      const charact = (inpString);
      let found = false;
      myList.forEach((elem) => {
          if(elem === charact){
            found = true;
          }
      })
      if(found){
        setAlert("\""+charact+"\" element exists");
      }else{
        setAlert("Element doesnt exists");
      }
    }
    
  }

  const getElementByIndexHandler = () => {
   
    if(inpString &&  !isNaN(parseInt(inpString))){
        const index = myList[parseInt(inpString)];

        setAlert("Position: "+index)
    }
  }


  const removeItemHandlerHandler = (e) => {
    console.log(e);
    let newList = []

    myList.forEach((elem, index) => {
      if(index!==e){
          newList.push(elem);
      }
    })
    SetMyList(newList)
    
  }



  const setStringHandler = (e) => {
    const myString = e.target.value;
    setInpString(myString)
    
  }

  

  return (
    <div >
      <Row className="justify-content-md-center mt-3">
        <InputBox myString={inpString} setString={setStringHandler} />
        <Button className="ml-1" variant="outline-success" onClick={addItemHandler}>Append</Button>
        <Button className="ml-1" variant="outline-primary" onClick={checkIfExistsHandler}>Look for</Button>
        <Button className="ml-1" variant="outline-info" onClick={getElementByIndexHandler}>Element at (index)</Button>
        <Button className="ml-1" variant="outline-danger" onClick={clearListHandler}>Clear</Button>
      </Row>
      <Row className="justify-content-md-center mt-3">
        {getSizehandler()>0 ? myList.map((elem, key) => <Character key={key} character={elem} clicker={() => removeItemHandlerHandler(key)} />) : "[ ]"}
      </Row>
      <Row className="justify-content-md-center mt-3">
          {alert?"Alert: "+alert:""}
      </Row>
      <Row className="justify-content-md-center mt-3">
        { "Char count: " + getSizehandler() }
      </Row>


    </div>
  );
}

export default App;
