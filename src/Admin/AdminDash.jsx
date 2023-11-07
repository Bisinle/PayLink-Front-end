import React from "react";
import TransactionChart from "./Children/TransactionChart";
import GenderPie from "./Children/GenderPie";
import RecentOrders from "./Children/RecentOrders";
import PopularProducts from "./Children/PopularProducts";

function AdminDash() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <GenderPie />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
}

export default AdminDash;
