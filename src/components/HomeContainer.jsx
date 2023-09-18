import React from "react";
import Delivery from "../components/img/delivery.png";
import HeroBg from "../components/img/heroBg.png";
const HomeComponent = () => {
  return (
    <section
      id="Home"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen"
    >
      <div className="py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6">
        <div className="flex item-center gap-2 md:items-center justify-center bg-orange-200 px-4 py-1 rounded-full">
          <p className="text-headingColor text: text-xl font-bold flex items-center text-base text-orange-600  font-semibold drop-shadow-xl">
            Bike Delivery
          </p>
          <div className="w-10 h-10 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain bg-white"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-heading Color">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor md:text-left md:w-[80%] text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          assumenda? Enim cum aut veritatis modi officiis nihil cumque,
          laudantium, iusto explicabo ducimus vel mollitia sint quibusdam
          reiciendis consequuntur! Officia tempore molestiae inventore
          perspiciatis!
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg transition-all ease-in-out duration-100 hover:shadow-2xl">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1">
        <div className="w-full flex items-center justify-center relative"></div>
        <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="" />
        <div className="w-full h-full absolute items-center justify-center "></div>
      </div>
    </section>
  );
};

export default HomeComponent;
