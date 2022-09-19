import React from 'react';

class ConstructorDid extends React.Component{

    constructor(){
        super();
        this.state = {
            name: 'Mudassar',
        }
        console.warn('constructor');
    }
    componentDidMount(){
        console.warn('ComponentDidMount');
        
    }
    render(){
        console.warn('render');
        return(
            <>
                <h1>Component Did Mount Method</h1>  
                <p>{this.state.name}</p>
                <button onClick={()=>{this.setState({name:'Mudassar Alam'})}}>Update State</button>
            </>
        )
    }
}
export default ConstructorDid;