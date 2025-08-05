import { useState } from "react";
import "./App.css";

function App() {
 
  let UpperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let LowerCase='abcdefjhigklmnopqrstuvwxyz';
  let SpecialSymbol='!@#$%^&*()?><./';
  let Number='1234567890';


    let[number,setNumber]=useState(false);
    let[uppercase,setUpperCase]=useState(false);
    let[lowercase,setLowerCase]=useState(false);
    let[specialCase,setSpecialCase]=useState(false);
  let [passwordLen,setPasswordLen]=useState(10);
  let [generatePassword,setGeneratePassword]=useState('');

  const GeneratePassword=()=>
  {
    let character='';
    if(lowercase) character+=LowerCase;
    if(uppercase) character+=UpperCase;
    if(specialCase) character+=SpecialSymbol;
    if(number) character+=Number;

    if(character === "")
    {
    setGeneratePassword('helo');

    }

    let password='';

    for (let i = 0; i < passwordLen; i++) {
      const randomIdx = Math.floor(Math.random()*character.length);
      password+=character[randomIdx];
    }

    setGeneratePassword(password);
  }
  const copyToClipboard=()=>
  {
    navigator.clipboard.writeText(generatePassword);
    alert("Password IS Copy");
  }

  return (
    <>
      <div className="main_div">
        <h1>Password Generator</h1>
        <div className="Diplay">
          <input type="text" readOnly value={generatePassword} />
          <button onClick={copyToClipboard}>Copy</button>
        </div>

        <div className="Input_div">
          <div className="Inputs">
            <p>Password Length</p>
            <input type="number" className="Number" max={20} min={10}  value={passwordLen} onChange={(event)=> setPasswordLen(event.target.value) }/>
          </div>

          <div className="Inputs">
            <p>Includes Uppercase Letters</p>
            <input
              type="checkBox"
              checked={uppercase}
              onChange={() => setUpperCase(!uppercase)}
            />
          </div>

          <div className="Inputs">
            <p>Includes Lowercase Letters</p>
            <input
              type="checkBox"
              checked={lowercase}
              onChange={() => setLowerCase(!lowercase)}
            />
          </div>

          <div className="Inputs">
            <p>Includes Number</p>
            <input
              type="checkBox"
              checked={number}
              onChange={() => setNumber(!number)}
            />
          </div>

          <div className="Inputs">
            <p>Includes Symbols</p>
            <input
              type="checkBox"
              checked={specialCase}
              onChange={() => setSpecialCase(!specialCase)}
            />
          </div>
        </div>
        <button onClick={()=> GeneratePassword()}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
