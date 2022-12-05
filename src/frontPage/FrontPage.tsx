import React, { useState } from "react";
import { BiSearch, BiHome } from "react-icons/bi";
import {
  HiOutlineBars3BottomLeft,
  HiOutlineBars3BottomRight,
} from "react-icons/hi2";
import { GiSelfLove } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import All from "../all/All";
import { MyList } from "../Items";
import { idText } from "typescript";

type Id = {
  id: string;
};

export type AddItem = {
  handleAdd: () => void;
};

const FrontPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<MyList[]>([]);

  const handleAdd = (product: Id) => {
    const productExist = cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="w-screen h-screen flex justify-between">
      <div className=" h-full w-12  bg-zinc-200 ">
        <HiOutlineBars3BottomLeft />
        <BiHome />
        <GiSelfLove />
      </div>
      <div className=" basis-3/4 flex-col">
        <span className="flex items-center m-auto mt-4 p-1 w-5/6 bg-zinc-200 rounded-md">
          <span>
            <BiSearch className="" />
          </span>
          <input
            className="w-full p-2 rounded-md bg-inherit outline-none "
            type="search"
            placeholder="What would you like to eat?"
          />
          <span>
            <HiOutlineBars3BottomRight className="cursor-pointer" />
          </span>
        </span>
        <div className=" w-width h-64 flex justify-items-center items-center  m-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            speed={700}
            loop={true}
            loopedSlides={50}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className=" w-width2 h-56 rounded-md m-auto "
                src="./burger-king/burger-k1.jpg"
                alt="slide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-width2 h-56  rounded-md m-auto "
                src="./burger-king/burger-k2.jpg"
                alt="slide2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-width2 h-56 rounded-md m-auto"
                src="./burger-king/burger-k3.jpg"
                alt="slide3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-width2 h-56 rounded-md m-auto"
                src="./burger-king/burger-k4.webp"
                alt="slide4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-width2 h-56 rounded-md m-auto"
                src="./burger-king/burger-k5.jpg"
                alt="slide5"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <All />
        </div>
      </div>
      <div className="basis-1/4 bg-zinc-200 ">
        <h5>My Orders</h5>
        <div>
          {cartItems &&
            cartItems.map((item, i) => {
              return (
                <>
                  <img src={item.image} alt="my" className="w-5 h-5" />
                  <small>{item.name}</small>
                  <p>{item.price}</p>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
