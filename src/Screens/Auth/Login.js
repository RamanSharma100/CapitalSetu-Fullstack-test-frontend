import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return toast.dark("Please fill in all fields !");

    loginUser(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <form className="pt-5 px-5" onSubmit={handleSubmit}>
      <MDBInput
        label="Email"
        type="email"
        className="mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        label="Password"
        type="password"
        className="mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <MDBBtn type="submit" color="primary" className="mt-2 form-control">
        Login
      </MDBBtn>
    </form>
  );
};

export default Login;
