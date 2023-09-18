import React from "react";
import { Header,MainConductor,CreateContainer,HomeContainer} from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <AnimatePresence >
    <div className="w-screen h-auto flex flex-col bg-primary ">
      <Header />
      <main className=" mt-14 mt:md-20 px-4 md:px-16 py-4  w-full">
       <Routes>
        <Route path="/*" element={<MainConductor/>}/>
        <Route path="/createitem" element={<CreateContainer/>}/>
        <Route path="/*" element={<HomeContainer/>}/>
       </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
};

export default App;
