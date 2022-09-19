import React, { Component } from 'react'

class ConstructorUpdate extends Component {
    constructor(props){
        super();
        this.state={
            counter : 0,
        }
    }
    componentDidUpdate(prevProps,PrevState,snapshot){
        console.warn('constructor did update',PrevState,prevProps);
    }
  render() {
    return (
      <>
        <h1>Constructor Did Update {this.props.class}</h1>
          <p>{this.state.counter} {this.props.name}</p>
          <button onClick={()=>{this.setState({counter: this.state.counter+1})}}>Did Update</button>
      </>
    )
  }
}
export default ConstructorUpdate;