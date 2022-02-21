import React, { useState } from "react";
import "./signup.css";
import { Email, Name, Phone, Password, confirmedPassword } from "./interface";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<Email[]>([]);
  const [name, setName] = useState<Name | any>("");
  const [phone, setPhone] = useState<Phone[]>([]);
  const [password, setPassword] = useState<Password[]>([]);
  const [confirmedPassword, setConfirmedPassword] = useState<
    confirmedPassword[]
  >([]);

  return (
    <section>
      <form className="infoform">
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
          placeholder="Enter your email"
        />
        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <label> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          placeholder="Confirm your password"
        />
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone numbers"
        />
        <button type="submit"> Continue </button>
      </form>
    </section>
  );
};

export default SignupForm;
