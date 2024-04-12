import React from "react";
import Wrapper from "../../../base/Wrapper.js";

export default function ProgressBar({
  children,
  width,
  height = "2px",
  color,
  classProgress
}) {

  const style = classProgress !== undefined ? classProgress + " progress_bar" : "progress_bar"

  return (
    <Wrapper>
      <div className={style}>
        <div className={"bar_style"} style={{ height: height.toString() + "px" }}>
          <div
              style={{backgroundColor: color, color: "white", width: width.toString() + '%'}}
              className={"bar_color"}
          ><span>{children}</span></div>
        </div>
      </div>
    </Wrapper>
  );
}
