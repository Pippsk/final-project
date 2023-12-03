import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, ref } from "yup";
import { toast } from "react-toastify";
import { PasswordInput } from "../../Components/PasswordInput/PasswordInput";

const commonSchema = {
  email: string()
    .email("The email address is not valid")
    .required("Please enter your email"),
  password: string()
    .required("Please enter your password")
    .min(4, "The password needs to be minimum 4 characters long"),
};

const loginSchema = object(commonSchema);

const registerSchema = object({
  ...commonSchema,
  retypePassword: string()
    .required("Please type your password again")
    .oneOf([ref("password")], "The two passwords do not match"),
  firstName: string().required("Please enter your first name"),
  lastName: string().required("Please enter your last name"),
  phone: number()
    .integer()
    .min(10)
    .typeError("Must be a number type")
    .required("Please add your phone number"),
});

const Auth = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { pathname } = useLocation();
  let isRegister = false;
  if (pathname === "/register") {
    isRegister = true;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isRegister ? registerSchema : loginSchema),
  });

  async function submitForm(values) {
    const { retypePassword, ...dataForServer } = values;

    const data = await fetch(
      `http://localhost:3000/${isRegister ? "register" : "login"}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForServer),
      }
    ).then(async (res) => {
      const data = res.json();
      // if (res.status >= 400 && res.status < 500) {
      //   const message = await data;
      //   toast.error(message);
      // }
      return data;
    });
    if (!data.accesToken) {
      toast.error(data);
      return;
    }

    toast.success("You have logged in succesfully");
    console.log(data);
  }

  return (
    <div className={styles.auth}>
      <h1>{isRegister ? "Register" : "Log in"}</h1>

      <form
        className={styles.styled_form}
        noValidate
        onSubmit={handleSubmit(submitForm)}
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register("email")}
          id="email"
          placeholder="Enter your email..."
        />
        {errors.email && (
          <p className="error_message">{errors.email.message}</p>
        )}

        <label htmlFor="password">Password:</label>
        <PasswordInput name="password" {...register("password")} />

        {errors.password && (
          <p className="error_message">{errors.password.message}</p>
        )}

        {isRegister && (
          <>
            <label htmlFor="retypePassword">Retype Password:</label>
            <PasswordInput
              name="retypePassword"
              {...register("retypePassword")}
            />

            {errors.retypePassword && (
              <p className="error_message">{errors.retypePassword.message}</p>
            )}

            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              placeholder="Enter your first name..."
            />
            {errors.firstName && (
              <p className="error_message">{errors.firstName.message}</p>
            )}

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              placeholder="Enter your last name..."
            />
            {errors.lastName && (
              <p className="error_message">{errors.lastName.message}</p>
            )}

            <label htmlFor="phone">Phone:</label>

            <input
              type="tel"
              id="phone"
              {...register("phone")}
              placeholder="Enter your phone number..."
            />
            {errors.phone && (
              <p className="error_message">{errors.phone.message}</p>
            )}
          </>
        )}

        <div className={styles.button_container}>
          <button type="submit">{isRegister ? "Register" : "Log In"}</button>
        </div>
        {isRegister && (
          <footer>
            Already have an account? <Link to="/login">Log in here</Link>
          </footer>
        )}
      </form>
    </div>
  );
};

export default Auth;
