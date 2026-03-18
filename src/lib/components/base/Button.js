import React from "react";

export default function Button({classBtn, children = "Click Me", href = "", size = "sm", variant = "solid",  ...props}) {
  const style = classBtn !== undefined ? classBtn : ""
  if(variant === "solid")
      variant = "btn"
  else if (variant === "outline")
      variant = "outline btn"
  else
      variant = "link"

  if(href){
      return (
          <a
              className={variant + " " + style + " " + size}
              href={href}
              {...props}
          >
              {children}
          </a>
      )
  }else{
      return (
          <button
              className={variant + " " + style + " " + size}
              {...props}
          >
              {children}
          </button>
      )
  }
}