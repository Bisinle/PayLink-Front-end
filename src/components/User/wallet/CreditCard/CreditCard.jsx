import React, { useContext } from "react";
import "./CreditStyle.css";
import visa from "./images/visa.png";
import chip from "./images/chip.jpg";

function CreditCard() {
  return (
    <div className="card-group">
      <div class="circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
      <div className="card rounded-lg  bg-black">
        <div className="logo">
          <img src={visa} alt="Visa" />
        </div>
        <div className="chip">
          <img src={chip} alt="chip" />
        </div>
        <div className="number text-xl mt-2">{localStorage.getItem("account_number")}</div>
        <div className="name text-sm">{localStorage.getItem("user_name")}</div>
        <div className="from">10/19</div>
        <div className="to">06/21</div>
      </div>
    </div>
  );
}

export default CreditCard;
