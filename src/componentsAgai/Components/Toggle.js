import React, { useState } from 'react';


function Toggle (){
    const [show,setShow] = useState(true);
    const [hide,setHide] = useState(false);
    const [togle,setTogle] = useState(false);

    function funshow(){
        setShow(true);
        setHide(false);
    }
    function funhide(){
        setHide(true);
        setShow(false);
    }
     return(
        <>
        {/* Tabs hide and show */}
        <button onClick={funshow}>Show</button>
        <button onClick={funhide}>Hide</button>
        

         {show ?<div>
                <h1>This is the First Tab</h1>
                <p>Lorem ipsum is a generator</p>
            </div>
            :null
            
            }   
            {hide?<div>
                <h1>This is the Second Tab</h1>
                <p>Lorem ipsum is a generator</p>
            </div>:null
             }
        <button onClick={()=>setTogle(!togle)}>Toggle Button</button>

        {togle?<div>
                <h1>This is the Second Tab</h1>
                <p>Lorem ipsum is a generator</p>
            </div>:null
             }

        </>
    )
}
export default Toggle;