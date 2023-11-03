import React, { useContext } from "react";
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
import { format, getMonth } from "date-fns";

// const data = [
//   {
//     name: "Jan",
//     Expense: 4000,
//     Income: 2400,
//   },
//   {
//     name: "Feb",
//     Expense: 3000,
//     Income: 1398,
//   },
//   {
//     name: "Mar",
//     Expense: 2000,
//     Income: 9800,
//   },
//   {
//     name: "Apr",
//     Expense: 2780,
//     Income: 3908,
//   },
//   {
//     name: "May",
//     Expense: 1890,
//     Income: 4800,
//   },
//   {
//     name: "Jun",
//     Expense: 2390,
//     Income: 3800,
//   },
//   {
//     name: "July",
//     Expense: 3490,
//     Income: 4300,
//   },
//   {
//     name: "Aug",
//     Expense: 2000,
//     Income: 9800,
//   },
//   {
//     name: "Sep",
//     Expense: 2780,
//     Income: 3908,
//   },
//   {
//     name: "Oct",
//     Expense: 1890,
//     Income: 4800,
//   },
//   {
//     name: "Nov",
//     Expense: 2390,
//     Income: 3800,
//   },
//   {
//     name: "Dec",
//     Expense: 3490,
//     Income: 4300,
//   },
// ];

export default function AnalyticBarChart() {
  const { walletActivity } = useContext(dataContext);

  if (!walletActivity || walletActivity.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  //--------------------------------------------------------------
  //   Step 1: Group transactions by week and calculate totals
  const weeklyData = walletActivity.reduce((acc, transaction) => {
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
  // console.log(walletActivity);
  // console.log(arr);
  // // console.log(data);

  // Step 2: Calculate the weekly totals
  //   const weeklyTotals = Object.values(weeklyData);

  // Step 3: Prepare data for the bar chart
  //   const data = {
  //     labels: Object.keys(weeklyData).map((week) => `Week ${week}`),
  //     datasets: [
  //       {
  //         label: "Sent",
  //         data: weeklyTotals.map((week) => week.sent),
  //         backgroundColor: "blue",
  //       },
  //       {
  //         label: "Received",
  //         data: weeklyTotals.map((week) => week.received),
  //         backgroundColor: "green",
  //       },
  //     ],
  //   };

  //   console.log(walletActivity);
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transactions</strong>

      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={arr}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sent"
              stroke="green"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="received" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
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
