import { Header } from "./Header/Header";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import { ListFilms } from "./CardFilms/List/ListFilms";
import "./MainComponent.css";
import React from "react";
import { Outlet } from "react-router-dom";

function MainComponent() {
  return (
    <div className="App">
      <Header />
      <div className="used_space">
        <FilterBlock />
        <ListFilms />
      </div>
      <Outlet />
    </div>
  );
}

export { MainComponent };
