import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, ref } from "yup";
import { useAuthContext } from "../Auth/AuthContext";

import styles from "./Profile.module.css";

const profileSchema = object({
  email: string()
    .email("The email address is not valid")
    .required("Please enter your email"),
  password: string()
    .required("Please enter your password")
    .min(4, "The password needs to be minimum 4 characters long"),
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

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileSchema) });

  const { user, accessToken } = useAuthContext();

  const updateProfile = async (values) => {
    const userId = user.id;

    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      console.log("Profile updated successfully:", data);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className={styles.profile_container}>
      <form onSubmit={handleSubmit(updateProfile)}>
        <div>
          <h1>My Profile</h1>
        </div>
        <div className={styles.field}>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            value={user.email}
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error_message}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="password"> Password</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && (
            <p className={styles.error_message}>{errors.password.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="retypePassword"> Password</label>
          <input
            type="password"
            id="retypePassword"
            {...register("retypePassword")}
          />
          {errors.retypePassword && (
            <p className={styles.error_message}>
              {errors.retypePassword.message}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="firstName"> First name</label>
          <input
            type="text"
            value={user.firstName}
            id="firstName"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className={styles.error_message}>{errors.firstName.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName"> Last Name</label>
          <input
            type="text"
            value={user.lastName}
            id="lastName"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className={styles.error_message}>{errors.lastName.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>

          <input
            type="tel"
            value={user.phone}
            id="phone"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={styles.error_message}>{errors.phone.message}</p>
          )}
        </div>

        <button type="submit" className={styles.add_product}>
          change infos
        </button>
      </form>
    </div>
  );
};

export default Profile;
