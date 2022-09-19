import React from 'react';
import './App.css';
import Props from './Components/Props';
import { useState } from 'react';
import ClassComprops from './Components/ClassComprops';
import InputFiealds from './Components/InputFiealds';
import Toggle from './Components/Toggle';
import HandleForm from './Components/HandleForm';
import ConditionalRendering from './Components/CondtionalRendering';
import FormValidation from './Components/FormValidation';
import FormValid from './Components/FormValidations/FormValid';
import FunctionAsp from './Components/FunctionAsp'
import MembersFunAsProp from './Components/MembersFunAsProp';
import Constructor from './Components/Constructor';
import ConstructorDid from './Components/ComponentDidMount/ConstructorDid';
import ConstructorUpdate from './Components/ComponentUpdatMount/ConstructorUpdate'

function App() {

  function getData (){
    alert('This is from get data')
  }
  
  return (
    <div className="App">
      {/* <InputFiealds />
      <Toggle />
      <HandleForm />
      <ConditionalRendering /> */}
      {/* <FormValidation /> */}
     {/* <FunctionAsp data={getData}/>
     <FunctionAsp data={getData}/>
     <FunctionAsp data={getData}/>
     <MembersFunAsProp data={getData}/> */}
     {/* <Constructor />
     <ConstructorDid /> */}
      <ConstructorUpdate name='ali' class='first year'/>
      
    </div>
  );
}

export default App;
