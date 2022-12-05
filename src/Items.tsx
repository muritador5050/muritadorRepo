import React from "react";
import { AddItem } from "./frontPage/FrontPage";

export type MyList = {
  id: string;
  image: string;
  name: string;
  price: string;
};

export const itemList: MyList[] = [
  {
    id: "1",
    image: "./burgers/burger001.jpg",
    name: "burger Mozza XL",
    price: "$30",
  },

  {
    id: "2",
    image: "./burgers/burger002.jpg",
    name: "Vog Manchurian",
    price: "$35",
  },

  {
    id: "3",
    image: "./burgers/burger003.jpg",
    name: "Chilli Fried Burger",
    price: "$39",
  },

  {
    id: "4",
    image: "./burgers/burger001.jpg",
    name: "burger king",
    price: "$32",
  },
  {
    id: "5",
    image: "./pizza/piz-1.jpg",
    name: "pizza deli",
    price: "$42",
  },
  {
    id: "6",
    image: "./pizza/piz-2.jpg",
    name: "pizza deli",
    price: "$40",
  },
  {
    id: "7",
    image: "./pizza/piz-4.jpeg",
    name: "pizza deli",
    price: "$36",
  },
  {
    id: "8",
    image: "./pizza/piz-8.jpg",
    name: "pizza deli",
    price: "$32",
  },
  {
    id: "9",
    image: "./burgers/burger011.jpg",
    name: "burger king",
    price: "$32",
  },
  {
    id: "10",
    image: "./pizza/piz-10.jpg",
    name: "pizza deli",
    price: "$42",
  },
  {
    id: "11",
    image: "./pizza/piz-6.jpg",
    name: "pizza deli",
    price: "$40",
  },
  {
    id: "12",
    image: "./burgers/burger017.jpg",
    name: "pizza deli",
    price: "$36",
  },
  {
    id: "13",
    image: "./pizza/piz-8.jpg",
    name: "pizza deli",
    price: "$32",
  },
];

const Items = () => {
  return (
    <div className="w-fit m-auto grid grid-cols-3 gap-4 ">
      {itemList.map((item, i) => {
        return (
          <div
            key={item.id}
            className=" w-fit pb-2 bg-white shadow rounded-md relative "
            // onClick={}
          >
            <img
              src="./pizza/loveeee.png"
              alt="loveeee"
              className="w-6 h-6 absolute right-4 top-4 bg-white p-1 rounded-full"
            />
            <img
              src={item.image}
              alt="items"
              className="w-56 h-40 rounded-md "
            />
            <div className="flex justify-between w-56 font-semibold p-1">
              <small>{item.name}</small>
              <small>{item.price}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
