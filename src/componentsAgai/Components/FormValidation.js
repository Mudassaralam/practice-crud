import React, { useState } from "react";

function FormValidation() {
    const [user,setUser] = useState('');
      const [userId,setUserId] = useState('');
      const [userWarn,setUserWar] = useState(false);
      const [userpass,setUserpass] = useState(false);

    function onSubmitF(e){
        if(user.length<3 || userId.length<3){
            alert('Invalid Information :) Try again')
        }else{
            alert("All the information is Good('_')");
        }
        e.preventDefault();
    }
    function userHandler(e){
        let item = e.target.value;
        if(item.length < 3){
            setUserWar(true)
        }else{
            setUserWar(false)
        }
        setUser(item);
        // console.log(e.target.value.length);
    }
    function userpassHandler(e){
        let item = e.target.value;
        if(item.length < 3){
            setUserpass(true)
        }else{
            setUserpass(false)
        }
        setUserId(item);
        // console.log(e.target.value.length);
    }
  return (
      
    <>
      <div>
           <h1>Login Form</h1>
        <form onSubmit={onSubmitF}>
          <input type="text" placeholder="Enter User ID" onChange={userHandler}/>{userWarn?<span>Invalid User</span>:null}<br />
          <input type="text" placeholder="Enter User Password" onChange={userpassHandler}/>{userpass?<span>Invalid User</span>:null}<br /><br />
          <input type='submit'/>
        </form>
      </div>
    </>
  );
}
export default FormValidation;
