import { useEffect, useState } from "react";

function App() {
  const [angle, setAngle] = useState(100);
  const [skew, setSkew] = useState(100);
  const [scale, setScale] = useState(0.5);
  const [border, setBorder] = useState(0);

  useEffect(function () {
    //Read
    setAngle(+localStorage.getItem("angle"));
    setSkew(+localStorage.getItem("skew"));
    setBorder(+localStorage.getItem("border"));

    setScale(+localStorage.getItem("scale"));
  }, []);

  function onAngleChange({ target }) {
    localStorage.setItem("angle", target.value);
    setAngle(+target.value);
  }

  function onSkewChange({ target }) {
    localStorage.setItem("skew", target.value);
    setSkew(+target.value);
  }
  function onScaleChange({ target }) {
    localStorage.setItem("scale", target.value);
    setScale(+target.value);
  }

  function onBorderChange({ target }) {
    localStorage.setItem("border", target.value);
    setBorder(+target.value);
  }
  const styles = {
    width: "200px",
    height: "200px",
    backgroundColor: "tomato",
    margin: " 50px",
    transform: `rotate(${angle}deg)`,
   
  };
  const styles2 = {
    width: "200px",
    height: "200px",
    backgroundColor: "tomato",
    margin: " 50px",
   
    transform: `skew(${skew}deg)`,
  
  };
  const styles3 = {
    width: "100px",
    height: "100px",
    backgroundColor: "tomato",
    margin: "50px",
   
    
  
    transform: `scale(${scale})`,
   
  };
  const styles4 = {
    width: "200px",
    height: "200px",
    backgroundColor: "tomato",
    margin: " 50px",
   
    borderRadius: `${border}%`,
  };

  // const [number, setNumber] = useState(0);

  // useEffect(function () {
  //   //Read
  //   setNumber(+localStorage.getItem('number'));
  // });
  // function onIncrease() {
  //   localStorage.setItem('number', number + 1);
  //   setNumber(number + 1);
  // }
  // function onDecrease() {
  //   localStorage.setItem('number', number - 1);
  //   setNumber(number - 1);
  // }

  // function onNumberChange({ target }) {
  //   //Create //Update /Delete
  //   localStorage.setItem("number", target.value);
  //   setNumber(target.value);
  // }

  // const [name, setName] = useState("");
  // useEffect(function () {
  //   //Read
  //   setName(localStorage.getItem("name"));
  // }, []);

  // function onNameChange({ target }) {
  //   //Create //Update /Delete
  //   localStorage.setItem("name", target.value);
  //   setName(target.value);
  // }
  // function onNameClear() {
  //   localStorage.removeItem("name");
  //   setName("");
  // }

  return (
    <div className="App">
      <div style={{ marginBottom: "100px" }}></div>
      <input
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={onAngleChange}
      />
      <div style={styles}></div>
      <div style={{ marginBottom: "100px" }}></div>
      <input
        type="range"
        min="0"
        max="360"
        value={skew}
        onChange={onSkewChange}
      />
      <div style={styles2}></div>
      <div style={{ marginBottom: "100px" }}></div>

      <input
        type="range"
        min="0.5"
        max="1.5"
        value={scale}
        onChange={onScaleChange} 
        
      />
      <div style={styles3}></div>
      <div style={{ marginBottom: "100px" }}></div>
      <input
        type="range"
        min="1"
        max="100"
        value={border}
        onChange={onBorderChange}
      />
      <div style={styles4}></div>

      {/* <button onClick={onIncrease}>+</button> //2
      <p>{number}</p>
      <button onClick={onDecrease}>- </button> 

       <input    //1
        type="text"
        value={name}
        placeholder="Your name"
        onChange={onNameChange}
      />
      <span>Your name is {name}</span>
      <button onClick={onNameClear}>Clear</button>  */}
    </div>
  );
}

export default App;
