import React, { useState } from "react";
import "./formTable.css";
const NewForm = () => {
  const [user, setUser] = useState([
    { name: "Zain", email: "sdwedw@gmail.com", password: 45367 },
  ]);

  const [data, setData] = useState({ name: "", email: "", password: "" });

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    formError: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (data.name !== "" && data.email !== "" && data.password !== "") {
      setUser([...user, data]);
      setData({ name: "", email: "", password: "" });
      setError({ ...error, formError: " " });
    } else {
      setError({ ...error, formError: "Fill all fields" });
    }
    // resetForm({values:""})
  };
  const inputHandler = (e) => {
    //  let name=e.target.name;
    //  let value=e.target.value;
    // setData({ ...data, [name]:value });

    if (e.target.id === "name") {
      if (e.target.value === "") {
        setError({ ...error, nameError: "Please Enter Valid Name" });
      } else {
        setError({ ...error, nameError: "" });
      }
      setData({ ...data, name: e.target.value });
    }
    if (e.target.id === "email") {
      let err =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

      setData({ ...data, email: e.target.value });
      if (e.target.value.match(err)) {
        setError({ ...error, emailError: "" });
      } else {
        setError({
          ...error,
          emailError: "Please Enter Valid Email e.g abc@xyz.com",
        });
      }
      setData({ ...data, email: e.target.value });
    }
    if (e.target.id === "password") {
      let err = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      setData({ ...data, password: e.target.value });
      if (e.target.value.match(err)) {
        setError({ ...error, passwordError: "" });
      } else {
        setError({
          ...error,
          passwordError: "Please Enter Valid Password eg Abc435@q",
        });
      }

      setData({ ...data, password: e.target.value });
    }
  };

  const updateHandler = (index) => {
    let arr = user[index];
    setData({
      name: arr.name,
      email: arr.email,
      password: arr.password,
    });

    //setData(...user,user.indexOf())
  };
  const deleteHandler = (index) => {
    // user.splice(user.indexOf(index), 1);
    //setUser([...user]);

    // const handleDelete = (index) => {
    //   console.log(index);
    let arr = user;
    //   console.log(arr);
    arr.splice(index, 1);
    setUser([...arr]);
    // };
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {error.formError && <p>{error.formError}</p>}

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={data.name}
          onChange={inputHandler}
          // onChange={nameHandler}
        />
        <br />
        {error.nameError && <p>{error.nameError}</p>}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={data.email}
          onChange={inputHandler}
          // onChange={emailHandler}
        />
        <br />
        {error.emailError && <p>{error.emailError}</p>}
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={data.password}
          onChange={inputHandler}
          // onChange={passwordHandler}
        />
        <br />
        {error.passwordError && <p>{error.passwordError}</p>}
        <input type="submit" onClick={submitHandler} id="btn" />
      </form>
      <br />
      <hr />
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        {user.map((e, index) => {
          return (
            <tr>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <input
                type="submit"
                value="Update"
                onClick={() => updateHandler(index)}
              />
              <input
                type="submit"
                value="Delete"
                onClick={() => deleteHandler(index)}
              />
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default NewForm;