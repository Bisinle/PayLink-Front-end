import React, { useContext } from "react";
import "./CreditStyle.css";
import visa from "./images/visa.png";
import chip from "./images/chip.jpg";

function CreditCard() {
  return (
    <div className="card-group  relative   ">
      <div class="circles ">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
      <div className="card rounded-lg ">
        <div className="logo">
          <img src={visa} alt="Visa" />
        </div>
        <div className="chip">
          <img src={chip} alt="chip" />
        </div>
        <div className="number text-xl mt-2">
          {56563465765467890}
        </div>
        <div className="name text-sm">{'Abdiwadu'}</div>
        <div className="from">10/19</div>
        <div className="to">06/21</div>
        <div class="ring"></div>
      </div>
    </div>
  );
}

export default CreditCard;
