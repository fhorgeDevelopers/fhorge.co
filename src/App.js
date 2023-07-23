import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Mode } from './providers/Mode';
import Preloader from './Preloader';

const App = () => {
  const Home = React.lazy(() => import('./pages/home/Home'));
  return (
    <>
      <Mode>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Suspense fallback={<Preloader />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </Mode>
    </>
  )
}

export default App