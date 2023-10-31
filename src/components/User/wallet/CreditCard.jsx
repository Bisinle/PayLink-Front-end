import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function CreditCard() {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Cards
        className="bg-yellow-600"
        customStyles={{
          cardNumber: {
            fontSize: "24px", // Customize font size
            color: "yellow", // Customize text color
            // Add more CSS styles as needed
          },
          // Customize other card fields as needed
        }}
        number={formData.number}
        name={formData.name}
        expiry={formData.expiry}
        cvc={formData.cvc}
        focused={formData.focused}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={formData.number}
          onChange={handleInputChange}
          onFocus={(e) => setFormData({ ...formData, focused: e.target.name })}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          onFocus={(e) => setFormData({ ...formData, focused: e.target.name })}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={formData.expiry}
          onChange={handleInputChange}
          onFocus={(e) => setFormData({ ...formData, focused: e.target.name })}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={formData.cvc}
          onChange={handleInputChange}
          onFocus={(e) => setFormData({ ...formData, focused: e.target.name })}
        />
      </form>
    </div>
  );
}

export default CreditCard;
