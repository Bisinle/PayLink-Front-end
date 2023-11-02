import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/helpers";
import { dataContext } from "../ContexProvider/MyContext";

export default function RecentOrders() {
  const { transactionData } = useContext(dataContext);
  if (!transactionData || transactionData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }
  // console.log(transactionData);
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Sender Name</th>
              <th>Receiver Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Transaction fee</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((order) => (
              <tr key={order.id}>
                <td>{order.transaction_id}</td>
                <td>{order.sender_name}</td>
                <td>{order.receiver_name}</td>
                <td>{format(new Date(order.created), "dd MMM yyyy")}</td>
                <td>{order.amount}</td>
                <td>{order.transaction_fee}</td>
                <td>{getOrderStatus(order.created)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
