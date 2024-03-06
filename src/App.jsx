import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Support from "./pages/Support/Support";
import Subs from "./pages/Subscription/Subs";
import Search from "./pages/Search/Search";

const App = () => {
  return(
     <>
       <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/subs" element={<Subs />}/>
        <Route path="/search" element={<Search />}/>
       </Routes>
     </>
     );
};

export default App;
