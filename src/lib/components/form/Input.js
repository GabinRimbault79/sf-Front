import React from "react";
export default function Input({type = "text", name, id = name, callback, ...props}) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input 
        onChange={(e) => typeof callback === "function" && callback(e.target.value)} 
        id={id} 
        name={name} 
        type={type} 
        {...props}/>
    </>
  )
}