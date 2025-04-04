import React from "react";
import Header from "../src/Components/Home/Header";
import { Routes,Route} from "react-router-dom";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import Hero from "./Components/Home/Hero";
import Property from "./Pages/Property";
import Profile from "./Pages/Profile";


const App = () => {
  return (
    <>
      <div> 
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Property" element={<Property />} />
        <Route exact path="/Profile" element={<Profile />} />
      </Routes>
     
      </div>
    </>
  );
  
};

export default App;

















// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router"
// import Navbar from "./Components/Navbar/Navbar";
// import Home from "./Pages/Home";
// import LogIn from "./Pages/LogIn";
// import SignUp from "./Pages/SignUp";


// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/Home" element={<Home />} />
//       <Route path="/LogIn" element={<LogIn />} />
//       <Route path="/SignUp" element={<SignUp />} />
//     </Routes>
//   </BrowserRouter>
//   )
// }

 
// export default App;

