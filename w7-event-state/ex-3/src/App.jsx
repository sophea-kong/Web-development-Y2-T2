import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [textA,setTextA] = useState("")
  const [textB,setTextB] = useState("")
  /* You will need some function to handle the key pressed and button events */

  function onA(){
    setTextA(document.getElementsByTagName("input")[0].value)
  }

  function onB(){
    setTextB(document.getElementsByTagName("input")[1].value)
  }

  function calcu(){
    if(!isNaN(textA) && !isNaN(textB)){
      document.getElementsByTagName("input")[2].value = parseInt(textA) + parseInt(textB);
    } else {
      document.getElementsByTagName("input")[2].value = "both A and B need to be number.";
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled  style={{color : (isNaN(textA) || isNaN(textB)) ? "red" : "white"}}/>
      <button onClick={calcu}>Compute</button>
    </main>
  );
}

export default App;
