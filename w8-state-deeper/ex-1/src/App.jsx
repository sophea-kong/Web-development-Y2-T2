import React, { useState } from "react";

export default function App() {
  const [scoreWidth,setScoreWidth] = useState(0);


  function setScore() {
    let score = document.getElementById('in').value;
    score = score%11;
    setScoreWidth(score);
    console.log(score)
  }

  const getScoreBarStyle = () => {
    // 1- Compute width
    let scorepercentwidth = (scoreWidth) * 10;

    // 2- Compute color (optional)


    function percentToHex(percent) {
      const value = Math.round((percent / 100) * 255);
      return value.toString(16).padStart(2, '0').toUpperCase();
    }     
    
    function replaceColor(str, start, end, replacement) {
      return str.substring(0, start) + percentToHex(replacement) + str.substring(end + 1);
    }
 

    let scoreColor = `#03bc47`;
    scoreColor = replaceColor(scoreColor,3,4,scorepercentwidth);
    console.log(scoreColor)
    // 3 - Return the style object
    return {
      width: scorepercentwidth + '%',
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input id='in' type="number" min="0" max="10" onChange={setScore}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
