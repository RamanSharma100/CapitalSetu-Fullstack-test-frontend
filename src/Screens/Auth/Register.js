import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = ({ setIsLoggedIn, registerUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !name)
      return toast.dark("Please fill in all fields !");

    registerUser(email, password, name);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <form className="pt-5 px-5" onSubmit={handleSubmit}>
      <MDBInput
        label="Name"
        type="text"
        className="mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        Register
      </MDBBtn>
    </form>
  );
};

export default Register;
