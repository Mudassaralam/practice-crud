import React, { useState } from 'react';

function Form(){
    const [user, setUser] = useState([{
        name: "Zain", email: "sdwedw@gmail.com",
    }]);

    const [data,setData] = useState({name:"",email:""});

    const [error,setError] =  useState({
        nameError: "",
        emailError: "",
        formError: "",
    
    })
    //Input handler

    const inputHandler = (e)=>{
        console.log(e.target.value);
        setUser({ ...user, user: e.target.value });

    }

    
    return(
        <>
            <form>
                <input type='text' placeholder='name' value={data.name} onChange={inputHandler}/>
                <input type='email' placeholder='email' value={data.email}  onChange={inputHandler}/>
                <input type="submit"  id="btn" />

            </form>
        </>
    )
}
export default Form;