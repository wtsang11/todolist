import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import './Header.css';

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        ToDoList
      </h1>
    </header>
  );
}

export default Header;
