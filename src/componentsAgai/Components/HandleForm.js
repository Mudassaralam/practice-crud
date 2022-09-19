
import React, { useState } from 'react';
import './handleforms.css'
function HandleForm (){
    const [name,setName] = useState("");
    const [selectV,setSelectV] = useState("");
    const [email,setEmail] = useState("");
    const [tnc , setTnc] = useState(false);
    const [list,setList] = useState();
    const [btnsubmit,setBtnsubmit] = useState(false)

    function onSubmitF(e){
        e.preventDefault();
        // console.log(name , selectV,tnc);
        setList(name ,email, selectV,tnc);
        const data = [name ,email, selectV,tnc];
        if(name && selectV && tnc & email){
        setList((li)=>[...li,data]);
        console.log(data);
        }
    }
    function clearfun(){
        setName(false);
        setEmail(false);
        setSelectV(false);
        setTnc(false);
        

    }
    return(
        <>
            <h2>Handle Form</h2>
            <form onSubmit={onSubmitF}>
                <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} /><br/><br/>
                <input type='email' placeholder='Email Address'  onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
                <select onChange={(e)=>setSelectV(e.target.value)}>
                    <option>Selcet Option</option>
                    <option>Marvel Studio</option>
                    <option>Universal Studio</option>
                </select><br/><br/>
                <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms & Policies</span><br/><br/>
                <input type='submit' onClick={()=>setBtnsubmit(true)} /><br/>
                <input type='reset' onClick={clearfun}/>
            </form>


{/* {btnsubmit?
            <div>
                <b>Name: {name}</b><br /><br />
                <b>Selection: {selectV}</b><br /><br />
                <b>Terms: {tnc}</b><br />
            </div>:null
        } */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>You Selection</th>
                    <th>TNC</th>
                </tr>
            </thead>
            <tbody>
            {btnsubmit?
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{selectV}</td>
                <td>{tnc}</td>
            </tr>:null
        }
            </tbody>
        </table>
            {/* {
                list.map((item,index)=>{
                    console.log(item.name)
                })
            } */}
         </>
    )
}
export default HandleForm;