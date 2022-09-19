import React from 'react';

class Constructor extends React.Component{

    constructor(){
        super();
        this.state = {
            data : 'Data Object',
        }
    }
    render(){
        return(
            <>
                <h1>Hello Constructor {this.state.data}</h1>
            </>
        )
    }
}
export default Constructor;