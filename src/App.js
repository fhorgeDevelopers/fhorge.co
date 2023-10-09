import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home />
          }
        />
      </Routes>
    </>
  )
}

export default App
