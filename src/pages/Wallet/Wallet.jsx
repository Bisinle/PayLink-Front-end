import React,{useState,useEffect,useContext} from "react";
import { dataContext } from "../../ContexProvider/MyContext";


export default function Wallet() {
  const{walletData}= useContext(dataContext)
  if (!walletData || walletData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }
  console.log(walletData);

  //-----------------------------------------------------------------
  //------------fund current users Wallet----------------------------
  

  return <div>Wallet page</div>;
}
