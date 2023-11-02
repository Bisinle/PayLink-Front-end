import React, { useContext } from "react";
import { dataContext } from "../../ContexProvider/MyContext";
import TanStackTable from "./TanStackTable";
function Transactions() {
  const { transactionData } = useContext(dataContext);

  if (!transactionData || transactionData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }
  console.log(transactionData);
  return (
    <div className="bg-gray-900">
      <TanStackTable  transactionData={transactionData} />
    </div>
  );
}

export default Transactions;
