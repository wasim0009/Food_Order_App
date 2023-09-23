import React from "react";
import Delivery from "../components/img/delivery.png";
import HeroBg from "../components/img/heroBg.png";
import { heroData } from "../utils/data.js";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        {/* 𝑻𝒉𝒆 𝑭𝒂𝒔𝒕𝒆𝒔𝒕 𝑫𝒆𝒍𝒊𝒗𝒆𝒓𝒚 𝒊𝒏   𝕿𝖍𝖊 𝕱𝖆𝖘𝖙𝖊𝖘𝖙 𝕯𝖊𝖑𝖎𝖛𝖊𝖗𝖞 𝖎𝖓*/}
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          𝕿𝖍𝖊 𝕱𝖆𝖘𝖙𝖊𝖘𝖙 𝕯𝖊𝖑𝖎𝖛𝖊𝖗𝖞 𝖎𝖓
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            𝕐𝕠𝕦𝕣 ℂ𝕚𝕥𝕪
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        𝐴 𝑢𝑠𝑒𝑟-𝑓𝑟𝑖𝑒𝑛𝑑𝑙𝑦 𝑓𝑜𝑜𝑑 𝑜𝑟𝑑𝑒𝑟𝑖𝑛𝑔 𝑤𝑒𝑏𝑠𝑖𝑡𝑒 𝑤ℎ𝑒𝑟𝑒 𝑦𝑜𝑢 𝑐𝑎𝑛 𝑏𝑟𝑜𝑤𝑠𝑒 𝑑𝑖𝑣𝑒𝑟𝑠𝑒 𝑚𝑒𝑛𝑢𝑠, 𝑝𝑙𝑎𝑐𝑒 𝑜𝑟𝑑𝑒𝑟𝑠, 𝑎𝑛𝑑 𝑒𝑛𝑗𝑜𝑦 ℎ𝑎𝑠𝑠𝑙𝑒-𝑓𝑟𝑒𝑒 𝑑𝑒𝑙𝑖𝑣𝑒𝑟𝑦 𝑜𝑟 𝑝𝑖𝑐𝑘𝑢𝑝. 𝐷𝑖𝑠𝑐𝑜𝑣𝑒𝑟 𝑎 𝑤𝑖𝑑𝑒 𝑟𝑎𝑛𝑔𝑒 𝑜𝑓 𝑐𝑢𝑖𝑠𝑖𝑛𝑒𝑠, 𝑡𝑟𝑎𝑐𝑘 𝑦𝑜𝑢𝑟 𝑜𝑟𝑑𝑒𝑟𝑠 𝑖𝑛 𝑟𝑒𝑎𝑙-𝑡𝑖𝑚𝑒, 𝑎𝑛𝑑 𝑐𝑢𝑠𝑡𝑜𝑚𝑖𝑧𝑒 𝑦𝑜𝑢𝑟 𝑚𝑒𝑎𝑙𝑠 𝑡𝑜 𝑦𝑜𝑢𝑟 𝑝𝑟𝑒𝑓𝑒𝑟𝑒𝑛𝑐𝑒𝑠. 𝐸𝑥𝑝𝑙𝑜𝑟𝑒 𝑙𝑜𝑐𝑎𝑙 𝑟𝑒𝑠𝑡𝑎𝑢𝑟𝑎𝑛𝑡𝑠, 𝑣𝑖𝑒𝑤 𝑟𝑎𝑡𝑖𝑛𝑔𝑠 𝑎𝑛𝑑 𝑟𝑒𝑣𝑖𝑒𝑤𝑠, 𝑎𝑛𝑑 𝑠𝑎𝑡𝑖𝑠𝑓𝑦 𝑦𝑜𝑢𝑟 𝑐𝑟𝑎𝑣𝑖𝑛𝑔𝑠 𝑤𝑖𝑡ℎ 𝑗𝑢𝑠𝑡 𝑎 𝑓𝑒𝑤 𝑐𝑙𝑖𝑐𝑘𝑠. 
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
        𝕺𝖗𝖉𝖊𝖗 𝕹𝖔𝖜
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imgSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
