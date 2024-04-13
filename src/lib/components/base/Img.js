import React from "react";
import {Link} from "react-router-dom";

export default function Img({src, alt = "alt", classImg, link = "", ...props}) {
  const style = classImg !== undefined ? classImg + " img-fluid" : "img-fluid"
  let imgsrc = src !== undefined ? src : "https://placehold.co/150x150";
  let linkImg = link !== "" ? link : "";

  if(linkImg !== ""){
    return (
        <>
          <Link to={linkImg}>
            <img src={imgsrc} alt={alt} className={style} {...props}/>
          </Link>
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