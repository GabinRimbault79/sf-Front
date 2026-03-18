import React from "react";

export default function Tag({ children, classTag, linkTag = null }) {
  const style = classTag ? classTag + " tag" : "tag";

  return (
    <>
      {linkTag ? (
        <span className={style}>
          <a href={linkTag}>
            {children}
          </a>
        </span>
      ) : (
        <span className={style}>
          {children}
        </span>
      )}
    </>
  );
}
