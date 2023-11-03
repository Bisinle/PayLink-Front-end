import classNames from "classnames";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../ContexProvider/MyContext";

const popularProducts = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail: "https://source.unsplash.com/100x100?macbook",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail: "https://source.unsplash.com/100x100?earbuds",
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail: "https://source.unsplash.com/100x100?laptop",
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",
    product_thumbnail: "https://source.unsplash.com/100x100?smartphone",
    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",
    product_thumbnail: "https://source.unsplash.com/100x100?touchpad",
    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",
    product_thumbnail: "https://source.unsplash.com/100x100?earphone",
    product_price: "$399.00",
    product_stock: 453,
  },
];

function PopularProducts() {
  const { beneficiaries } = useContext(dataContext);
  if (!beneficiaries || beneficiaries.length === 0) {
    // Render a loading indicator
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200 ">
      <strong className="text-gray-700   font-medium">Beneficiaries</strong>

      <div className="flex justify-around mt-6">
        <strong className="text-gray-700 font-medium">Name</strong>
        <strong className="text-gray-700 font-medium">Account</strong>
      </div>
      {beneficiaries.length !== 0 ? (
        <div className="mt-4 flex flex-col gap-3">
          {beneficiaries.map((ben) => (
            <Link
              
              to="/wallet"
              className="flex items-start hover:no-underline l"
            >
              <div className="ml-4 flex-1">
                <p className="text-lgm text-gray-800 ">{ben.name}</p>
              </div>
              <div className="text-sm text-gray-700 pl-1.5">{ben.Account}</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-red-500 font-semibold text-xl flex justify-center items-center mt-10">
          {" "}
          NO beneficiaries Found
        </div>
      )}
    </div>
  );
}

export default PopularProducts;
