import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import "../../css/all.css";
import "../../css/course-landing.css";
import "../../css/course-landing-lower.css";
import "../../css/homepage-lower.css";
import "../../css/faqs.css";
import "../../css/publishers.css";
import "../../css/publish-on-alison.css";
import "../../css/testimonials.css";
import Intro from './landing-page/Intro';
import Categories from './landing-page/Categories';
import Goals from "./landing-page/Goals";
import Courses from "./landing-page/Courses";
import Publishers from "./landing-page/Publishers";
import Careerss from "./landing-page/Careerss";
import Test from "./landing-page/Testimonial";
import Testimonial from "./landing-page/Testimonial";
import Upskill from "./landing-page/Upskill";
import App from "./landing-page/App";

const Home = () => {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '40vh' }}>
        <Intro />
        <Categories />
        <Goals />
        <Courses />
         <Publishers />
         <Careerss />              
         <Test />
         <Testimonial />
         <Upskill />
         <App />
      </main>
      <Footer />
    </>
  )
}

export default Home;
