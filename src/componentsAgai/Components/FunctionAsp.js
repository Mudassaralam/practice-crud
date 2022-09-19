import React from "react";

 function FunctionAsp(props) {
  return (
    <div>
      <h1>Pass function As a Props In Fist File Function Asp</h1>
      <button onClick={props.data}>Get Data</button>
    </div>
  );
}
export default FunctionAsp;
