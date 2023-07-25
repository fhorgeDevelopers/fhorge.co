import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Mode } from './providers/Mode';
import Preloader from './Preloader';
import { Hook } from './providers/Hook';
import { Calls } from './providers/Calls';
import Faq from './pages/faq/Faq';
const App = () => {
  const Home = React.lazy(() => import('./pages/home/Home'));
  const ContactUs = React.lazy(() => import('./pages/contactUs/ContactUs'));
  const NotFound = React.lazy(() => import('./pages/notFound/NotFound'));
  const AllCareers = React.lazy(() => import('./pages/careers/AllCareers'));
  const CareerCategories = React.lazy(() => import('./pages/careers/CareerCategories'));
  const EachCareer = React.lazy(() => import('./pages/careers/EachCareer'));
  return (
    <>
      <Hook>
        <Calls>
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
              <Route
                exact
                path='/build-your-career'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/earn-money'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/courses'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/courses/:category_id'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/courses/:category_id/:course_id'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/courses/query/:search_text'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/careers'
                element={
                  <Suspense fallback={<Preloader />}>
                    <AllCareers />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/careers/:category_id'
                element={
                  <Suspense fallback={<Preloader />}>
                    <CareerCategories />
                  </Suspense>
                }
              />
              <Route
                exact
                path='/careers/:category_id/:career_id'
                element={
                  <Suspense fallback={<Preloader />}>
                    <EachCareer />
                  </Suspense>
                }
              />
              <Route
                path='/contact-us'
                element={
                  <Suspense fallback={<Preloader />}>
                    <ContactUs />
                  </Suspense>
                }
              />
              <Route
                path='/faqs'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Faq />
                  </Suspense>
                }
              />
              <Route
                path='*'
                element={
                  <Suspense fallback={<Preloader />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </Mode>
        </Calls>
      </Hook>
    </>
  )
}

export default App