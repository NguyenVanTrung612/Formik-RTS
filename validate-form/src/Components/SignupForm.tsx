import React, { useEffect, useState } from "react";
import "./signup.css";
import { Email, Name, Phone, Password, confirmedPassword } from "./interface";
import { useFormik } from "formik";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<Email | any>("");
  const [name, setName] = useState<Name | any>("");
  const [phone, setPhone] = useState<Phone | any>("");
  const [password, setPassword] = useState<Password | any>("");
  const [confirmedPassword, setConfirmedPassword] = useState<
    confirmedPassword | any
  >("");

  interface ForkimValues {
    email: string;
    name: string;
    // phone: number;
    password: string;
    confirmedPassword: string;
  }

  const formik = useFormik<ForkimValues>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmedPassword: "",
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      password,
    };
    console.log(newUser);
  };

  return (
    <section>
      <form className="infoform" onSubmit={handleSubmit}>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        <label> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        <button type="submit"> Continue </button>
      </form>
    </section>
  );
};

export default SignupForm;
