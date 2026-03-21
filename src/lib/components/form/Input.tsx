import React from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'name' | 'id' | 'onChange'> {
  name: string;
  id?: string;
  callback?: (value: string) => void;
}

export default function Input({type = "text", name, id = name, callback, ...props}: InputProps) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input 
        onChange={(e) => callback?.(e.target.value)}
        id={id} 
        name={name} 
        type={type} 
        {...props}/>
    </>
  )
}