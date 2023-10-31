import React from "react";
import DonutChart from "react-donut-chart";
import "./Donut.css";

function Donut({ currentUserWalletActivity }) {
  // console.log(currentUserWalletActivity[0]);
  let TotalSent = 0;
  let TotalReceived = 0;
  const totalSentAndReceived = currentUserWalletActivity.map((activity) => {
    if (activity.transaction_type === "sent") {
      TotalSent += activity.amount;
      return TotalSent;
    } else if (activity.transaction_type === "received") {
      TotalReceived += activity.amount;
      return TotalReceived;
    }
  });
  // console.log(TotalSent);
  // console.log(TotalReceived);
  // console.log(currentUserWalletActivity);
  // console.log(totalSentAndReceived);

  return (
    <div className="border pt-10 h-[400px] w-[500px] rounded-lg shadow-xl font-bold text-xl flex flex-col  justify-center items-center shadow-gray-300">
      <h1 className="mt-2 mb-5 ">Sent vs Received</h1>
      <DonutChart
        data={[
          {
            label: "TotalSent",
            value: parseInt(`${TotalSent}`),
          },
          {
            label: "TotalReceived",
            value: parseInt(`${TotalReceived}`),
          },
        ]}
        colors={["black", "#A462EA"]}
        strokeColor="black"
        className="custom-donut-chart"
      />
    </div>
  );
}

export default Donut;
