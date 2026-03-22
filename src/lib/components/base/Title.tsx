import React from "react";

interface EntryProps {
  classTitle?: string;
  lvl?: "h1" | "h2" | "h3";
  children: string | number;
}

export default function Title({classTitle, lvl = "h1", children}: EntryProps) {

  const Type = lvl;

  return(
    <Type
      className={classTitle}
    >
      {children}
    </Type>
  )
}