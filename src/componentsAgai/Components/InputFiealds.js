import React, { useState } from 'react';

function InputFiealds (){
const [data,setData] = useState(null);
const [print,setPrint]  = useState(false);
    const getData = (val)=>{
        // console.log(val.target.value)
        setData(val.target.value);
        setPrint(false)
    }
    const setupdate = ()=>{
        setPrint(true);
        
    }
    return(
        <>
            <h1>Get Data Input Fiealds</h1>
            <input type='text' onChange={getData}/>
            <input type='radio' value='Right' onChange={getData}/>
            <button onClick={setupdate} >Click To Print</button>
            <p>{
                print? <h1>{data}</h1>:null
            }</p>
        </>
    )
}
export default InputFiealds;