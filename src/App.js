import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Mode } from './providers/Mode';
import Preloader from './Preloader';

const App = () => {
  const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
  return (
    <>
      <Mode>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Suspense fallback={<Preloader />}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </Mode>
    </>
  )
}

export default App