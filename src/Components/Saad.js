import { React, useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    rollNumber: "",
  });

  const [userArr, setUserArr] = useState([
    {
      name: "saad",
      email: "saadmehmood131@gmail.com",
      rollNumber: "2193154",
    },
    {
      name: "Noor",
      email: "noor141@gmail.com",
      rollNumber: "2193154",
    },
    {
      name: "Ahmed",
      email: "ahmed131@gmail.com",
      rollNumber: "2193344",
    },
  ]);
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    rollNumberError: "",
    formError: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.targetid);

    if (e.target.id === "name") {
      if (e.target.value === "" || e.target.value === null) {
        setError({ error, nameError: "Name is Required" });
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
    } else if (e.target.id === "rollNumber") {
      if (e.target.value === "" || e.target.value === null) {
        setError({ error, rollNumberError: "Enter Roll Number" });
      } else {
        setError({ error, rollNumberError: "" });
      }
      setUser({ ...user, rollNumber: e.target.value });
    }
  };

  const handleRegister = () => {
    if (user.name !== "" && user.email !== "" && user.rollNumber !== "") {
      setUserArr([...userArr, user]);
      setUser({ name: "", email: "", rollNumber: "" });
      setError({ error, formError: "" });
    } else {
      setError({ error, formError: "Fill all fields" });
    }
  };

  const handleDelete = (index) => {
    console.log(index);
    let arr = userArr;
    console.log(arr);
    arr.splice(index, 1);
    setUserArr([...arr]);
  };

  const [registerBtn, setRegisterBtn] = useState(true);
  const [updateBtn, setUpdateBtn] = useState(false);

  const handleEdit = (index) => {
    let ediArr = userArr[index];
    // console.log(ediArr);
    setUser({
      name: ediArr.name,
      email: ediArr.email,
      rollNumber: ediArr.rollNumber,
    });

    setUpdateBtn(true);
    setRegisterBtn(false);
  };

  const handleUpdate = (index) => {
    setRegisterBtn(true);
    setUpdateBtn(false);
    let array = userArr;
    array.splice(index, 1);
    setUserArr([...userArr, user]);
    setUser({ name: "", email: "", rollNumber: "" });
  };

  return (
    <>
      <form className="margin">
        <h1> Registration Form</h1>

        <input
          className="margin1"
          id="name"
          name="name"
          type="name"
          placeholder="name"
          value={user.name}
          onChange={handleChange}
        />
        {error.nameError && <p> {error.nameError}</p>}
        <br />

        <input
          className="margin1"
          id="email"
          name="email"
          type="email"
          placeholder="email"
          value={user.email}
          onChange={handleChange}
        />
        {error.emailError && <p> {error.emailError}</p>}

        <br />

        <input
          className="margin1"
          id="rollNumber"
          name="rollNumber"
          type="text"
          placeholder="Roll Number"
          value={user.rollNumber}
          onChange={handleChange}
        />
        {error.rollNumberError && <p> {error.rollNumberError}</p>}

        <br />
        {registerBtn && (
          <button type="button" className="margin1" onClick={handleRegister}>
            Register
          </button>
        )}
        {error.formError && <p> {error.formError}</p>}

        {updateBtn && (
          <button type="button" className="margin1" onClick={handleUpdate}>
            Update
          </button>
        )}
      </form>
      <table>
        <thead>
          <tr>
            <th> Serial Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.rollNumber}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Form;
