import React from "react";

export default function Img({src, alt = "alt", classImg, link = "", ...props}) {
  const style = classImg !== undefined ? classImg + " img-fluid" : "img-fluid"
  const imgsrc = src || "https://placehold.co/150x150";

  if(link){
    return (
        <>
          <a href={link}>
            <img src={imgsrc} alt={alt} className={style} {...props}/>
          </a>
        </>
    )
  } else {
    return (
        <>
          <img src={imgsrc} alt={alt} className={style} {...props}/>
        </>
    )
  }
}