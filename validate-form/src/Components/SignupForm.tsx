import React, { useState } from "react";
import "./signup.css";
import { Email, Name, Phone, Password, confirmedPassword } from "./interface";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<Email | any>("");
  const [name, setName] = useState<Name | any>("");
  const [phone, setPhone] = useState<Phone | any>("");
  const [password, setPassword] = useState<Password | any>("");
  const [confirmedPassword, setConfirmedPassword] = useState<
    confirmedPassword | any
  >("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section>
      <form className="infoform" onSubmit={handleSubmit}>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <label> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          onChange={(e) => setConfirmedPassword(e.target.value)}
          placeholder="Confirm your password"
        />
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone numbers"
        />
        <button type="submit"> Continue </button>
      </form>
    </section>
  );
};

export default SignupForm;
