import React, { useState } from "react";
import "./signup.css";
import { Email, Name, Phone, Password, confirmedPassword } from "./interface";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<Email[]>([]);
  const [name, setName] = useState<Name[]>([]);
  const [phone, setPhone] = useState<Phone[]>([]);
  const [password, setPassword] = useState<Password[]>([]);
  const [confirmedPassword, setConfirmedPassword] = useState<
    confirmedPassword[]
  >([]);
  return <>Sign up form</>;
};

export default SignupForm;
