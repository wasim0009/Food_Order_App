import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiPlus, BiMinus } from "react-icons/bi";
import { motion } from "framer-motion";
const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="w-full cursor-pointer flex items-center justify-between p-4 ">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className=" text-color text-3xl" />
        </motion.div>
        <motion.p
          whileTap={{ scale: 0.5 }}
          className="text-textColor text-lg font-semibold"
        >
          Cart
        </motion.p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-200  cursor-pointer text-textColor      text-base"
        >
          Clear <RiRefreshFill />{" "}
        </motion.p>
      </div>
      {/* bottom divison */}
      <div className="bg-cartBg w-full h-full rounded-t-[2rem] flx flex-col">
        {/* cart items section */}
        <div className="h-340 w-full md:42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none ">
          {/* cart-items */}
          <div className="w-full h-20 p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-ece10.appspot.com/o/Images%2F1695390967772-f7.png?alt=media&token=d0e2b1e2-fe6a-46c6-a77f-28b206e57168"
              alt="image"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
            />

            {/* name-box */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-300 font-semibold ">
                Pasberry Pi
              </p>
              <p className="text-sm block text-gray-300 font-semibold">$ 5.5</p>
            </div>
            <div className="group flex items-center  gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50" />
              </motion.div>
              <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* cart total section */}
        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Sub Total</p>
            <p className="text-gray-400 text-lg">$ 8.5</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg">$2.5</p>
          </div>
          <div className="w-full flex items-center justify-between border-b border-gray-600 my-2">
            <p className="text-gray-200 text-xl font-semibold">Total</p>
            <p className="text-gray-200 text-xl font-semibold">$11.5</p>
          </div>
          <motion.button whileTap={{scale:0.8}} className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to bg-orange-700 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-in-out">
            Check Out
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
