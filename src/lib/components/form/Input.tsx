import React from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'name' | 'id'> {
  name: string;
  id?: string;
  callback?: (value: string) => void;
}

export default function Input({ type = "text", name, id = name, callback, onChange, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        {...props}
        onChange={(e) => {
          onChange?.(e);
          callback?.(e.target.value);
        }}
        id={id}
        name={name}
        type={type}
      />
    </>
  )
}