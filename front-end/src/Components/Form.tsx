import React, { useState } from "react";
import { ValidateForm } from "./Util/ValidateForm";
import "../Components/style.css";

function utf8_to_b64(str: string) {
  return window.btoa(encodeURIComponent(str));
}

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailalert, setEmailAlert] = useState("");
  const [passwordalert, setPasswordAlert] = useState("");

  const validate = () => {
    const emailResult = ValidateForm.validateEmail(email);
    if (!emailResult.status) {
      console.log(emailResult.message);
      setEmailAlert(emailResult.message);
    }
    const passwordResult = ValidateForm.validatePassword(password);
    if (!passwordResult.status) {
      console.log(passwordResult.message);
      setPasswordAlert(passwordResult.message);
    }
    if (emailResult.status && passwordResult.status) {
      alert("successful signin");
    }
  };

  const handleChangeemail = (mail: any) => {
    setEmail(mail.target.value);
  };
  const handleChangepassword = (pass: any) => {
    setPassword(pass.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(password);
    const hashed = utf8_to_b64(password);
    console.log(hashed);

    const user = { email, password: hashed };
    fetch("http://localhost:4000/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="container-form">
      <h1 className="form-header">Sign In Page</h1>
      <form className="form" onSubmit={handleSubmit}>
        <table className="table-body">
          <tbody>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  id="emaillogin"
                  type="email"
                  placeholder="enter yout email"
                  name="email"
                  value={email}
                  onChange={handleChangeemail}
                />
              </td>
            </tr>
            <p className="Alert">{emailalert}</p>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  id="passwordlogin"
                  type="password"
                  placeholder="enter yout password"
                  name="password"
                  value={password}
                  onChange={handleChangepassword}
                />
              </td>
            </tr>
            <p className="Alert">{passwordalert}</p>
          </tbody>
        </table>
        <button id="submit" onClick={validate}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Form;
