import React, { useState } from "react";

function WalletActivityRecord({
  activity_id,
  activity_amount,
  activity_created_at,
  activity_description,
  activity_transaction_type,
}) {
  const typeColor =
    activity_transaction_type === "sent" ? "bg-red-200" : "bg-green-200";
  const arrow_color =
    activity_transaction_type === "sent" ? "text-red-400" : "text-green-400";
  const arrows = activity_transaction_type === "sent" ? "⬆" : "⬇";

  return (
    <>
      <td className="p-3 text-md text-gray-700  ">
        <a
          className={`font-bold text-3xl text-blue-500 hover:text-black ${arrow_color}`}
          href=""
        >
          {arrows}
        </a>
      </td>
      <td className="p-3 text-md text-gray-700 ">{activity_description}</td>
      <td className="p-3 text-md text-gray-700 whitespace-nowrap ">
        {" "}
        <span
          className={` p-2 text-xs  uppercase tracking-wider text-green-800  rounded-lg bg-opacity-70 ${typeColor}`}
        >
          {activity_transaction_type}
        </span>
      </td>
      <td className="p-3 text-md text-gray-700  whitespace-nowrap">
        {activity_created_at}
      </td>
      <td className="p-3 text-md text-gray-700  whitespace-nowrap">
        ${activity_amount}
      </td>
    </>
  );
}

export default WalletActivityRecord;
