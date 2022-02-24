export interface Email {
  email: string;
  setEmail: string;
}

export interface Name {
  name: string;
  setName: string;
}

export interface Phone {
  phone: number;
  setPhone: number;
}

export interface Password {
  password: string;
  setPassword: string;
}

export interface confirmedPassword {
  confirmedPassword: string;
  setConfirmedPassword: string;
}

export interface FormikValues {
  email: string;
  name: string;
  phone: number;
  password: string;
  confirmedPassword: string;
}
