import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
// import { GoPersonAdd,LuLogOut } from 'react-icons/fa6';
import Logo from "./img/chickenbhai1.png";
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
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:pd-6 md:px-16">
      {/* desktop or tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex item-center gap-2">
          <motion.img
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            src={Logo}
            className="object-cover w-15 h-12 font-bold"
            alt="logo"
          />
          <motion.p
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            className="text-headingColor text-xl font-bold flex items-center"
          >
            City
          </motion.p>
        </Link>
        <div className="flex items-center gap-8 ml-auto">
          <motion.ul
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            className="flex items-center gap-8"
          >
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
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            className="relative flex items-center justify-center "
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify center">
              <p className="text-xs text-white font-semibold ml-1.5">2</p>
            </div>
          </motion.div>

          <div className="relative">
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              whileTap={{ scale: 0.3 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] min-h-[40px] h-10  drop-shadow-xl cursor-pointer rounded-full"
              alt="user profile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-8 right-5 px-4 py-2 "
              >
                {user && user.email === "mr.wasim006@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-2 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-400 duration-100 ease-in-out text-textColor  text-base">
                      New Items <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-400 duration-100 ease-in-out text-textColor  text-base "
                  onClick={logout}
                >
                  Logout <MdLogout />{" "}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile  */}
      <div className="md:hidden w-full h-full  flex items-center justify-between">
        <Link to={"/"} className="flex item-center gap-2">
          <motion.img
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            src={Logo}
            className="object-cover w-15 h-12 font-bold"
            alt="logo"
          />
          <motion.p
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            className="text-headingColor text-xl font-bold flex items-center"
          >
            City
          </motion.p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.3 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] min-h-[40px] h-10  drop-shadow-xl cursor-pointer rounded-full"
            alt="user profile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-8 right-5 px-4 py-2 "
            >
              {user && user.email === "mr.wasim006@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-2 py-2 flex items-center gap-3  cursor-pointer hover:text-headingColor duration-100 ease-in-out text-textcolor  text-base">
                    New Items <MdAdd />
                  </p>
                </Link>
              )}
              <motion.ul
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                className="flex flex-col px-2 py-2 gap-5"
              >
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
              </motion.ul>

              <motion.p
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                className=" m-2 p-2 px-2 py-2 rounded-md flex items-center gap-3 cursor-pointer bg-gray-200  hover:text-headingColor hover:bg-gray-300 duration-100 ease-in-out text-textcolor  text-base"
                onClick={logout}
              >
                Logout <MdLogout />{" "}
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
