import React from "react";
import "./Sixth.css";
import { menu_list } from "../../../assets/img/images";

const ExploreMenu = ({ category }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>🍴 Search By Food</h1>
      <p className="explore-menu-text">
        Choose from a wide variety of cuisines and dishes to satisfy your
        cravings!
      </p>

      <div className="explore-menu-list d-flex justify-content-evenly pt-2 ">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img
                className={`${
                  category === item.menu_name ? "active" : ""
                } img-fluid rounded-circle`}
                src={item.menu_img}
                alt={item.menu_name}
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
