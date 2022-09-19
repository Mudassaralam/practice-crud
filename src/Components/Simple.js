import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

function Simple() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [newdata, setNewData] = useState([]);

  const[error, setError]= useState(
      {
          nameError:"",
          emailError: '',
          }
  )
 


  const onsubmithandler = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.name.length > 3 && data.email !== "") {
      console.log("data", data);
      setNewData([...newdata, data]);
      setData({ name: "", email: "" });
      alert('Data Submited Successfully')
    } else {
      alert("Data not submited");
    }
  };
  const userNamehandler = (e) => {
    setData({ ...data, name: e.target.value });
    
    if(e.target.id === 'name'){
       if(data.name.length < 3){
           setError({error, nameError: "Enter Your Name"})
           alert('Enter Mini 3 Characters')
       } else if(data.name.length > 10){
         alert('Enter Less Than 10 Characters ')
         setError({error, nameError: "Enter Less Than 10 Ch"})
         }else{
           setError({error,nameError:""})
       } 
    }else{
        alert('Data Is Good')
    }

    
  };
  const userEmailHandler = (e) => {
    setData({ ...data, email: e.target.value });

    if(e.target.id === 'email'){
        const link =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        if(link.test(data.email.value)){
            setError({error , email: ''})
        }else{
           setError({error , email: 'Enter Valid Email' })
        }
       }
  };

  const removeitem = (index) => {
    // console.log(index);
    setNewData(newdata.filter((o, i) => index !== i));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2">
            <h1>Crud Operations</h1>
            <form onSubmit={onsubmithandler}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="form-control"
                value={data.name}
                onChange={userNamehandler}
              />{}
              <br />
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="form-control"
                value={data.email}
                onChange={userEmailHandler}
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <Table variant="dak">
        <thead>
          <tr>
            <td># Sr No</td>
            <td>Name</td>
            <td>Email Address</td>
            <td>Delete</td>
            <td>Update</td>
          </tr>
        </thead>
        <tbody>
          {newdata.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td style={{cursor:'pointer'}} ><FaEdit/></td>
                <td style={{ cursor: "pointer" }}>
                  <FaRegTrashAlt onClick={() => removeitem(index)} />
                </td>
                {/* <td style={{cursor:'pointer'}}><FaRegTrashAlt /></td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default Simple;
