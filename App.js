import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const TemperatureComponent=()=>{
const[temperature,settemperature]=useState(0);
const incrementTemperature = () => {
  settemperature(temperature + 1);
};

const decrementTemperature = () => {
  settemperature(temperature - 1);
};

const backgroundcolor=()=>{
  if(temperature>30){
    return 'red';
  }
  else if(temperature<=30){
  return 'blue';
}
else{
  return 'green';
}
}

const temperatureStyle = {
  backgroundColor: backgroundcolor(),
 
};




  return (
    <div style={temperatureStyle}>
      <h2><center>{temperature}</center></h2>
      <center><button onClick={incrementTemperature}>Increment</button>
      <button onClick={decrementTemperature}>Decrement</button></center>
      
    </div>
  );
}

export default TemperatureComponent;




