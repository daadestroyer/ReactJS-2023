import React from "react";
import "./Restraunt.css";
import Menu from "./MenuAPI";
import MenuCard from "./MenuCard";
import { useState } from "react";
export default function RestrauntApp() {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <div className="container text-center">
        <h1>Welcome to The Rekha's Kitchen</h1>
        <nav className="navbar ">
          <div className="btn-group">
            <button className="btn-group__item">Breakfast</button>
            <button className="btn-group__item">Lunch</button>
            <button className="btn-group__item">Evening</button>
            <button className="btn-group__item">Dinner</button>
            <button className="btn-group__item">All</button>
          </div>
        </nav>
      </div>
      <MenuCard menu={menuData} />
    </>
  );
}
