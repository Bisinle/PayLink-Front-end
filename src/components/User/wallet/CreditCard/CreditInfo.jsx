import React from "react";
import PayModal from "../PayModal";
import CreditCard from "./CreditCard";

function CreditInfo() {
  return (
    <div class="w-full h-[400px] p-6  relative border border-gray-200 rounded-lg   ">
      <CreditCard />
      <PayModal />
    </div>
  );
}

export default CreditInfo;
