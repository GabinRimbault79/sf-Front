import React from "react";
import {Link} from "react-router-dom";

export default function Button({classBtn, children = "Click Me", href = "", size = "sm", variant = "solid",  ...props}) {
  const style = classBtn !== undefined ? classBtn : ""
  let linkButton = href !== "" ? href : "";
  if(variant === "solid")
      variant = "btn"
  else if (variant === "outline")
      variant = "outline btn"
  else
      variant = "link"

  if(linkButton !== ""){
      return (
          <Link
              className={variant + " " + style + " " + size}
              to={href}
              {...props}
          >
              {children}
          </Link>
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