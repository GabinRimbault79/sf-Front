import React from "react";
import List from "../../../base/List";

export default function HeadBar({ classHeadBar, title, iconsTitle, classLink = "liseret", data, icons }) {
  const style = classHeadBar ? "headbar " + classHeadBar : "headbar";
  let listNav = null;

  if(data != null)
    listNav = data
  else
    listNav = {
      home: {
        liens: ["/", "Accueil"],
      },
      products: {
        liens: ["/products", "Produits"]
      },
      category: {
        liens: ["/products/category", "Catégorie"]
      }
    };


  return (
    <header className={style}>
      <nav>
        <div className={"logo_content"}>
          {iconsTitle} {title}
        </div>
        <List type={"ul"} classLink={classLink} data={listNav} />
        <div className={"social_content"}>
          {icons ? <List classLink={"icons_headbar"} data={icons} type={"ul"} /> : null}
        </div>
      </nav>
    </header>
  );
}