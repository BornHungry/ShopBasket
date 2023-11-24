import React from "react";
import "./Offcanvas.css";
const Offcanvas = ({ hiddenCart }) => {
  return (
    <div onClick={hiddenCart}>
      <div className="back-drop" />
    </div>
  );
};

export default Offcanvas;
