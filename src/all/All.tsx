import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nearby from "../nearby/Nearby";
import Promotion from "../promotion/Promotion";
import NewComers from "../newcomers/NewComers";
import BestSeller from "../bestseller/BestSeller";
import TopRated from "../toprated/TopRated";
// import $ from "jquery";
import { AiOutlineStar, AiOutlineWallet } from "react-icons/ai";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { BsGridFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";

const All = () => {
  return (
    <div className="relative h-height overflow-y-auto overscroll-auto scrollbar-hide ">
      <div className=" bg-white sticky top-0 z-20 font-semibold border-b-2 border-black border-opacity-25 mb-5">
        <ul className="flex  justify-around p-2 cursor-pointer">
          <li className=" flex items-center gap-1">
            <HiOutlineArchiveBox className="text-yellow-500" />
            <Link className="hover:text-range" to={"/nearby"}>
              Nearby
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <BsGridFill className="text-yellow-500" />
            <Link className="hover:text-range" to={"/promotion"}>
              Promotion
            </Link>
          </li>{" "}
          <li className=" flex items-center gap-1">
            <AiOutlineWallet className="text-yellow-500" />
            <Link className="hover:text-range" to={"/newcomers"}>
              Newcomers
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <GiSelfLove className="text-yellow-500" />
            <Link className="hover:text-range" to={"/bestseller"}>
              Best Sellers
            </Link>
          </li>{" "}
          <li className=" flex items-center gap-1">
            <AiOutlineStar className="text-yellow-500" />
            <Link className="hover:text-range" to={"/toprated"}>
              Top Rated
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path={"/"} element={<Nearby />} />
          <Route path={"/nearby"} element={<Nearby />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/newcomers" element={<NewComers />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/toprated" element={<TopRated />} />
        </Routes>
      </div>
    </div>
  );
};

export default All;
