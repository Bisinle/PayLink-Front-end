import React, { useState, useEffect } from "react";
import WalletActivityRecord from "./WalletActivityRecord";
import { dataContext } from "../../ContexProvider/MyContext";
import { useContext } from "react";
import { walletContext } from "./WalletContextProvider";
import Donut from "./Donut";
import Example from "./Example";

export default function WalletActivity() {
  const { Current_UserId } = useContext(dataContext);

  const { walletActivityData } = useContext(walletContext);
  if (!walletActivityData || walletActivityData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  // const [walletActivityData, setWalletActivityData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5555/wallet/wallet-Activity")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((response) => {
  //       // console.log(response);
  //       setWalletActivityData(response);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // }, []);

  if (!walletActivityData || walletActivityData.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  const currentUserWalletActivity = walletActivityData.filter((user) => {
    if (user.user_id === parseInt(Current_UserId)) {
      return user;
    }
  });

  // console.log(currentUserWalletActivity);
  const activityRow = currentUserWalletActivity.map((activity) => {
    return (
      <tr key={activity.id}>
        <WalletActivityRecord
          activity_id={activity.id}
          activity_amount={activity.amount}
          activity_created_at={activity.created_at}
          activity_description={activity.description}
          activity_transaction_type={activity.transaction_type}
        />
      </tr>
    );
  });
  return (
    <div className=" sm:flex sm:flex-col md:flex-row ">
      {/* <Pichart walletData={walletData} /> */}
      {/* <Example /> */}
      <Donut currentUserWalletActivity={currentUserWalletActivity} />
      <div className="  rounded-lg shadow-lg ml-5 mr-5 border    w-[100%] ">
        <table className="w-full">
          <thead className="bg-gray-100 rounded-xl  border-b-2 border-gray-300">
            <tr>
              <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">
                #
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Descriptions
              </th>
              <th className="  w-24 p-2 text-sm font-semibold tracking-wide text-left">
                Type
              </th>
              <th className="w-24 p-2 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="w-20 p-2 text-sm font-semibold tracking-wide text-left">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">{activityRow}</tbody>
        </table>
      </div>
    </div>
  );
}

// import React from 'react'

// const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

//     const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

//     const goToNextPage = () => {
//             if(currentPage !== nPages) setCurrentPage(currentPage + 1)
//     }
//     const goToPrevPage = () => {
//         if(currentPage !== 1) setCurrentPage(currentPage - 1)
//     }
//     return (
//         <nav>
//             <ul className='pagination justify-content-center'>
//                 <li className="page-item">
//                     <a className="page-link"
//                         onClick={goToPrevPage}
//                         href='#'>

//                         Previous
//                     </a>
//                 </li>
//                 {pageNumbers.map(pgNumber => (
//                     <li key={pgNumber}
//                         className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

//                         <a onClick={() => setCurrentPage(pgNumber)}
//                             className='page-link'
//                             href='#'>

//                             {pgNumber}
//                         </a>
//                     </li>
//                 ))}
//                 <li className="page-item">
//                     <a className="page-link"
//                         onClick={goToNextPage}
//                         href='#'>

//                         Next
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Pagination

// import React from 'react'

// const Records = ({data}) => {

//   return (
//     <table className="table">
//         <thead>
//             <tr>
//                 <th scope='col'>ID</th>
//                 <th scope='col'>First Name</th>
//                 <th scope='col'>Last Name</th>
//                 <th scope='col'>City</th>

//             </tr>
//         </thead>
//         <tbody>
//             {data.map(item => (
//                 <tr>
//                     <td>{item.id} </td>
//                     <td>{item.first_name} </td>
//                     <td>{item.last_name} </td>
//                     <td>{item.city} </td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
//   )
// }

// export default Records

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Records from './components/Records';
// import Pagination from './components/Pagination';

// function App() {

//     // To hold the actual data
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true);

//     const [currentPage, setCurrentPage] = useState(1);
//     const [recordsPerPage] = useState(10);

//     useEffect(() => {
//         axios.get('data.json')
//             .then(res => {
//                     setData(res.data);
//                     setLoading(false);
//                 })
//                 .catch(() => {
//                     alert('There was an error while retrieving the data')
//                 })
//     }, [])

//     const indexOfLastRecord = currentPage * recordsPerPage;
//     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//     const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
//     const nPages = Math.ceil(data.length / recordsPerPage)

//     return (
//         <div className='container mt-5'>
//             <h2> Simple Pagination Example in React </h2>
//             <Records data={currentRecords}/>
//             <Pagination
//                 nPages={nPages}
//                 currentPage={currentPage}
//                 setCurrentPage={setCurrentPage}
//             />
//         </div>
//     );
// }

// export default App;
