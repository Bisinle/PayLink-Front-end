import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/helpers";
import { dataContext } from "../ContexProvider/MyContext";

export default function Transactions() {
  const { currentUserData } = useContext(dataContext);
  // if (!transactionData || transactionData.length === 0) {
  //   // Render a loading indicator
  //   return (
  //     <div className="text-center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong
        className="text-lg text-gray-700
       font-semibold"
      >
        Transactions
      </strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        {currentUserData.transactions.length !== 0 ? (
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th> ID</th>
                <th>SName</th>
                <th>RName</th>
                <th>type</th>
                <th>Amnt</th>
                <th>chanrges</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {currentUserData.transactions.map((order) => (
                <tr key={order.id}>
                  <td className=" text-sm">{order.transaction_id}</td>
                  <td className=" text-sm">{order.sender_name}</td>
                  <td className=" text-sm">{order.receiver_name}</td>
                  <td className=" text-sm">
                    {format(new Date(order.created), "dd MMM yyyy")}
                  </td>
                  <td className=" text-sm">{order.amount}</td>
                  <td className=" text-sm">{order.transaction_fee}</td>
                  <td className=" text-sm">{getOrderStatus(order.created)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-red-500 font-semibold text-3xl text-center">
            No transactions
          </div>
        )}
      </div>
    </div>
  );
}
