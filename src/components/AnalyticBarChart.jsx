import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dataContext } from "../ContexProvider/MyContext";
import { getMonth, getSeconds } from "date-fns";

export default function AnalyticBarChart() {
  const {
    currentUserData,
    localRoutePrefix,
    access_token,
    runPieChart,
    setRunPieChart,
  } = useContext(dataContext);
  const [walletActivities, setWalletActivities] = useState([]);
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/wallet/wallet-Activity`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(" user----->", res.data);
        setWalletActivities(res.data);
      })
      .catch((error) => {
        console.error("Error fetching a user:", error);
      });
  }, [runPieChart]);

  //--------------------------------------------------------------
  //   Step 1: Group transactions by week and calculate totals
  const weeklyData = walletActivities.reduce((acc, transaction) => {
    const transactionDate = new Date(transaction.created_at);
    const weekNumber = getMonth(transactionDate); // Use getWeek from date-fns to get the week number

    if (!acc[weekNumber]) {
      acc[weekNumber] = { sent: 0, received: 0, name: "week" };
    }

    if (transaction.transaction_type === "sent") {
      acc[weekNumber].sent += transaction.amount;
    } else if (transaction.transaction_type === "received") {
      acc[weekNumber].received += transaction.amount;
    }
    // arr.push(acc)
    return acc;
  }, {});
  //   console.log(weeklyData);
  const arr = Object.values(weeklyData);

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-bold">Transactions</strong>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={arr}
          margin={{
            top: 20,
            right: 10,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="10 4 0 0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 200]} />

          <Tooltip />
          <Legend />
          <Bar dataKey="sent" fill="#f0094d" />
          <Bar dataKey="received" fill="#0A67BA" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-3 w-full flex-1 text-xs"></div>
    </div>
  );
}
//  <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={arr}
//           margin={{
//             top: 20,
//             right: 10,
//             left: -10,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
//           <XAxis dataKey="name" />
//           <YAxis type="number" domain={[0, 200]} />

//           <Tooltip />
//           <Legend />
//           <Bar dataKey="sent" fill="#f0094d" />
//           <Bar dataKey="received" fill="#0A67BA" />
//         </BarChart>
//       </ResponsiveContainer>
{
  /* <ResponsiveContainer width="100%" height="100%"> */
}
{
  /* <LineChart data={arr}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="sent" stroke="green" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="received" stroke="black" />
  </LineChart>
// </ResponsiveContainer>; */
}
