import React, { useState } from "react";
import { ValidateForm } from "./Util/ValidateForm";
import "../Components/style.css";
import axios from "axios";

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
  const hangleonSubmit = (e: any) => {
    e.preventDefault();
  };

  axios.post("http://localhost:5000/").catch((err) => {
    console.error(err);
  });
  return (
    <div className="container-form">
      <h1>Sign In Page</h1>
      <form className="form" onSubmit={hangleonSubmit}>
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
