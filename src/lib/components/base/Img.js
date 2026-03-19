import React from "react";

export default function Img({src, alt = "", classImg, link = "", ...props}) {
  const style = classImg !== undefined ? classImg + " img-fluid" : "img-fluid"

  if(!src)
    return null;

  if(link){
    return (
        <>
          <a href={link}>
            <img src={src} alt={alt} className={style} {...props}/>
          </a>
        </>
    )
  } else {
    return (
        <>
          <img src={src} alt={alt} className={style} {...props}/>
        </>
    )
  }
}