"use client";

import SvgVisibility from "@/assets/svg/visibility";
import ErrorMessage from "@/helper/error-message";
import React, { useState } from "react";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, errors, ...props }, ref) => {
    return (
      <div className={styles.ct}>
        <div
          className={`${styles.wp}${
            errors?.[props.id!] ? " " + styles.error : ""
          }`}
        >
          <input
            className={styles.input}
            type={type}
            placeholder=" "
            ref={ref}
            {...props}
          />
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
        </div>
        {errors?.[props.id!] && (
          <ErrorMessage message={errors?.[props.id!]?.message} />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const typeText = showPassword
      ? (props.type = "text")
      : (props.type = "password");

    return (
      <div className={styles.ct}>
        <div
          className={`${styles.wp}${
            errors?.[props.id!] ? " " + styles.error : ""
          }`}
        >
          <input
            className={styles.input}
            id={props.id}
            type={typeText}
            placeholder=" "
            ref={ref}
            {...props}
          />
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
          <span
            className={styles.visiblePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            <SvgVisibility />
          </span>
        </div>
        {errors?.[props.id!] && (
          <ErrorMessage message={errors?.[props.id!]?.message} />
        )}
      </div>
    );
  }
);
InputPassword.displayName = "InputPassword";

export { Input, InputPassword };
