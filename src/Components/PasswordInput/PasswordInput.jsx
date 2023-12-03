import React, { forwardRef, useState } from "react";
import styles from "./PasswordInput.module.css";

import { HiEye, HiEyeSlash } from "react-icons/hi2";

export const PasswordInput = forwardRef(({ name, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.password_input}>
      <input
        type={isVisible ? "text" : "password"}
        id={name}
        ref={ref}
        name={name}
        {...props}
        placeholder="Enter your password..."
      />
      <button className={styles.eye} type="button" onClick={toggleVisibility}>
        <HiEye />
      </button>
      {isVisible && (
        <button className={styles.eye} type="button" onClick={toggleVisibility}>
          <HiEyeSlash />
        </button>
      )}
    </div>
  );
});
