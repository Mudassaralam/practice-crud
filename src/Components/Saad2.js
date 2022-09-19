import { React, useState } from "react";
import { Table } from "react-bootstrap";
const Saad = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [data, setData] = useState([
    {
      name: "ali",
      email: "ali@test.com",
      
    },
    
  ]);
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    formError: "",
  });

  const inputhandleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.targetid);

    if (e.target.id === "name") {
      if (e.target.value === "" || e.target.value === null) {
        setError({ error, nameError: "Name Must Be Greator Than 3" });
      } else {
        setError({ error, nameError: "" });
      }
      setUser({ ...user, name: e.target.value });
    } else if (e.target.id === "email") {
      const link =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if (link.test(e.target.value)) {
        setError({ error, emailError: "" });
      } else {
        setError({ error, emailError: "Enter Valid Email" });
      }
      setUser({ ...user, email: e.target.value });
    }else{
      setUser({ ...user, rollNumber: e.target.value });
    }
  };

  const handleRegister = () => {
    if (user.name !== "" && user.email !== "" && user.rollNumber !== "") {
      setData([...data, user]);
      setUser({ name: "", email: "", rollNumber: "" });
      setError({ error, formError: "" });
    } else {
      setError({ error, formError: "" });
      alert('Fill The Form')
    }
  };

  const removeitem = (index) => {
    console.log(index);
    let removeitm = data;
    // console.log(removeitm);
    removeitm.splice(index, 1);
    setData([...removeitm]);
  };

  const [regBtn, setRegisterBtn] = useState(true);
  const [updateBtn, setUpdateBtn] = useState(false);

  const handleEdit = (index) => {
    let edituser = data[index];
    // console.log(edituser);
    
    setUser({
      name: edituser.name,
      email: edituser.email,
      rollNumber: edituser.rollNumber,
    });

    setUpdateBtn(true);
    setRegisterBtn(false);
  };

  const handleUpdate = (index) => {
    setRegisterBtn(true);
    setUpdateBtn(false);
    let array = data;
    // console.log(data)
    array.splice(index, 1);
    setData([...data, user]);
    setUser({ name: "", email: "", rollNumber: "" });
  };

  return (
    <>
    <h1> Registration Form</h1>
     <div className="col-md-8 offset-2">
     <form>
        <input
          className="form-control"
          autoComplete="off"
          id="name"
          name="name"
          type="name"
          placeholder="Name"
          value={user.name}
          onChange={inputhandleChange}
        />
        {error.nameError && <p> {error.nameError}</p>}
        <br />

        <input
          className="form-control"
          autoComplete="off"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={inputhandleChange}
        />
        {error.emailError && <p> {error.emailError}</p>}

        <br />

        <br />
        {regBtn && (
          <button type="button" className="btn btn-primary" onClick={handleRegister}>
            Add
          </button>
        )}
        {error.formError && <p> {error.formError}</p>}

        {updateBtn && (
          <button type="button" className="btn btn-danger" onClick={handleUpdate}>
            Update
          </button>
        )}
      </form>
     </div>
      <Table>
        <thead>
          <tr>
            <th> Serial Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.rollNumber}</td>
                <td>
                  <button onClick={() => handleEdit(index)} className='btn bg-info'>Edit</button>
                </td>
                <td>
                  <button onClick={() => removeitem(index)} className='btn bg-danger'>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default Saad;
