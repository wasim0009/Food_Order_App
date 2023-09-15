import React from "react";
import { Header,MainConductor,CreateContainer} from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary ">
      <Header />
      <main className=" mt-24  p-10 w-full">
       <Routes>
        <Route path="/*" element={<MainConductor/>}/>
        <Route path="/createitem" element={<CreateContainer/>}/>
       </Routes>
      </main>
    </div>
  );
};

export default App;
