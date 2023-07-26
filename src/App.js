import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Mode } from './providers/Mode';
import Preloader from './Preloader';
import { Hook } from './providers/Hook';
import { Calls } from './providers/Calls';
import Faq from './pages/faq/Faq';
import EmpowerUs from './pages/about/EmpowerUs';
const App = () => {
  const Home = React.lazy(() => import('./pages/home/Home'));
  const ContactUs = React.lazy(() => import('./pages/contactUs/ContactUs'));
  const NotFound = React.lazy(() => import('./pages/notFound/NotFound'));
  const AllCareers = React.lazy(() => import('./pages/careers/AllCareers'));
  const CareerCategories = React.lazy(() => import('./pages/careers/CareerCategories'));
  const EachCareer = React.lazy(() => import('./pages/careers/EachCareer'));
  const AboutUs = React.lazy(() => import('./pages/about/AboutUs'));
  const AboutCourses = React.lazy(() => import('./pages/about/AboutCourses'));
  const How = React.lazy(() => import('./pages/about/How'));
  const EmpowerUs = React.lazy(() => import('./pages/about/EmpowerUs'));
  const Programmes = React.lazy(() => import('./pages/about/Programmes'));
  const Publishers = React.lazy(() => import('./pages/about/Publishers'));
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


              {/* about routes start  */}

              <Route
                path='/about/our-story'
                element={
                  <Suspense fallback={<Preloader />}>
                    <AboutUs />
                  </Suspense>
                }
              />
              <Route
                path='/about/about-fhorge-courses'
                element={
                  <Suspense fallback={<Preloader />}>
                    <AboutCourses />
                  </Suspense>
                }
              />
              <Route
                path='/about/how-it-works'
                element={
                  <Suspense fallback={<Preloader />}>
                    <How />
                  </Suspense>
                }
              />
              <Route
                path='/publishers'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Publishers />
                  </Suspense>
                }
              />
              <Route
                path='/programmes'
                element={
                  <Suspense fallback={<Preloader />}>
                    <Programmes />
                  </Suspense>
                }
              />
              <Route
                path='/empower-us'
                element={
                  <Suspense fallback={<Preloader />}>
                    <EmpowerUs />
                  </Suspense>
                }
              />

              {/* About routes end  */}

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