import React,{useState} from 'react';
import './App.css';
import VerifyOTPMutation from './VerifyOTPMutation'

function App() {
  let[Mobilenumber,setmobilenumer] = useState()
  const verifyLogin = () => {
    VerifyOTPMutation(Mobilenumber)
  }

  return (
    <div className="App">
        Mobile number: <input type="text" name="Mobile number" placeholder="Mobile number" onKeyDown={event => setmobilenumer(event.target.value)}/>
        <input type="submit" value="Submit" onClick={() => verifyLogin()}/>
    </div>
  );
}

export default App;
