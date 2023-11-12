import React from 'react'
import "./login/style.css";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
    return (
        <>
          <Login/>
        </>
        // <div>Fhorge Home</div>
       
    )
}

export default Home