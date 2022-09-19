import React, { useState } from 'react';

function ConditionalRendering (){
    const [loginIn, setLoggedIn] = useState(true);
    return(
        <>
            {/* Condtional Rendering */}

            {loginIn?<h1>User Logged In</h1>:<h1>User Logout</h1>}

        </>
    )
}
export default ConditionalRendering;