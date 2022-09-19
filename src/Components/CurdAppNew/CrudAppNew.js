import { configure } from "@testing-library/react";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
function CrudAppNew() {

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [userdata, setUserData] = useState([
    {
      name: "Ahmad",
      email: "ahmad@test.com",
    },
 
  ]);

//Input Handler

const inputhandler = (e)=>{
  if(e.target.id=== 'name'){
    setUser({ ...user, name: e.target.value });
  }
  if(e.target.id=== 'email'){
    setUser({ ...user, email: e.target.value });
  }
     
   // setUser({ ...user, name: e.target.value }); 
   // setUser({ ...user, email: e.target.value }); 
    console.log(e.target.value)
};
//Resgister

const handleRegister = (e)=>{
    e.preventDefault();
    setUserData([...userdata, user]);
    setUser ({ name:"",email:'' });
    
}
//Delete Command
const removeRow = (index) => {
    // console.log(index);
    let arr = userdata;
    console.log(arr);
    arr.splice(userdata.indexOf(index),1);
    setUserData([...arr]);
   
  };
  //For Edit Row
  const [registerBtn, setRegisterBtn] = useState(true);
  const [updateBtn, setUpdateBtn] = useState(false);

  const handleEdit = (index)=>{
      let editdata = userdata[index];
      // console.log(editdata)
     
      setUser({
          name: editdata.name,
          email:editdata.email
      })
      setUpdateBtn(true);
      setRegisterBtn(false)
  }
  //For Update Row
const handleUpdate = (index)=>{
  setRegisterBtn(true);
  setUpdateBtn(false);
  let updatarr = userdata;
  updatarr.splice(index, 1);
  setUserData([...userdata, user]);
  setUser({ name: "", email: "" });

}


  return (
    <>
      <div className="container">
        <h1>Crud App</h1>
        <div className="col-md-8 offset-2">
          <form >
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              onChange={inputhandler}
            />
            <br />
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              onChange={inputhandler}
            />
            <br />
            <button className="btn btn-primary" type='submit' onClick={handleRegister}>Register</button>
            {/* {registerBtn && ()} */}
            {updateBtn && (<button className="btn btn-primary" onClick={handleUpdate}>Update</button>)}
            
          </form>
        </div>
      </div>

      <Table>
        <thead>
          <tr>
            <td># Sr No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {userdata.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={handleEdit}>Edit</button>
                </td>
                <td>
                  <button  onClick={() => removeRow(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default CrudAppNew;
