import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Logo from "./img/logo.png";
import { app } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Avatar from "./img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop or tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex item-center gap-2">
          <img src={Logo} className="object-cover w-15 h-12" alt="logo" />
          <p className="text-headingColor text-xl font-bold flex items-center">
            City
          </p>
        </Link>
        <div className="flex items-center gap-8 ml-auto">
          <ul className="flex items-center gap-8">
            <li className="text-base transition-all text-textcolor hover:text-headingColor duration-100 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base transition-all text-textcolor hover:text-headingColor duration-100 ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base transition-all text-textcolor hover:text-headingColor duration-100 ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base transition-all text-textcolor hover:text-headingColor duration-100 ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center ">
            <FaBasketShopping className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify center">
              <p className="text-xs text-white font-semibold ml-1.5">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.3 }}
              src={Avatar}
              className="w-10 min-w-[40px] min-h-[40px] h-10  drop-shadow-xl cursor-pointer"
              alt="user profile"
              onClick={login}
            />
          </div>
        </div>
      </div>

      {/* mobile  */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
