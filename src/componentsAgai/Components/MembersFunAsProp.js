import React from "react";

 function MembersFunAsProp(props) {
  return (
    <div>
      <h1>Pass function As a Props In Second file Membersfun</h1>
      <button onClick={props.data}>Get Data</button>
    </div>
  );
}
export default MembersFunAsProp;
