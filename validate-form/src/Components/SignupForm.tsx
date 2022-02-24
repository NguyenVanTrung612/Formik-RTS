import React, { useState } from "react";
import "../Components/sass/signup.css";
import {
  // Email,
  // Name,
  // Phone,
  // Password,
  // confirmedPassword,
  FormikValues,
} from "./interface";
import * as Yup from "yup";

import { useFormik, yupToFormErrors } from "formik";
import { formatDiagnostic } from "typescript";

const SignupForm: React.FC = () => {
  // const [email, setEmail] = useState<Email | any>("");
  // const [name, setName] = useState<Name | any>("");
  // const [phone, setPhone] = useState<Phone | any>("");
  // const [password, setPassword] = useState<Password | any>("");
  // const [confirmedPassword, setConfirmedPassword] = useState<
  //   confirmedPassword | any
  // >("");

  const formik = useFormik<FormikValues>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      phone: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 5 character for more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Password must be Minimum eight in length include one upper case and special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password is not matches"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors.password);

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && (
          <p className="errorMsg">{formik.errors.password}</p>
        )}
        <label> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.phone && (
          <p className="errorMsg">{formik.errors.phone}</p>
        )}
        <button type="submit"> Continue </button>
      </form>
    </section>
  );
};

export default SignupForm;
