import React from "react";
import "./Sixth.css";
import { menu_list } from "../../../assets/img/images";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="  explore-menu" id="explore-menu">
      <h1>Search By Food</h1>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((previous) =>
                  previous === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={`${category === item.menu_name ? "active" : ""} img-fluid` }
                src={item.menu_img}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
