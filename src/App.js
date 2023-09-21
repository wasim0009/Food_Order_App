import React, { useEffect } from "react";
import {
  Header,
  MainConductor,
  CreateContainer,
  HomeContainer,
} from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/Reducer";
const App = () => {
  const [{}, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary ">
        <Header />
        <main className=" mt-14 mt:md-20 px-4 md:px-16 py-4  w-full">
          <Routes>
            <Route path="/*" element={<MainConductor />} />
            <Route path="/createitem" element={<CreateContainer />} />
            <Route path="/*" element={<HomeContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
