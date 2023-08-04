import React from 'react';
import { useMode } from "../../providers/Mode";
import pic1 from "./img/p8.jpeg"
import pic2 from "./img/post3.jpeg"
import pic3 from "./img/post6.jpeg"

import "./index.css"



export default function search() {
  return (
    <div className='app'>
      <SearchText />
      <Cards />
    </div>
  )
}

function SearchText() {
  return (
    <div className="container">
      <div className='search'>
        <h1>Free online Draw Courses</h1>
        <p> from art to zologogy, Alison has thousands
          of the online courses and is adding more all the time
          we seek out experts in their field to design learning material
          that is comprehensive,broken down into a manageable chunks and gives
          you a series of achievable learning outcomes. our online courses strive
          to provide interactive and ruch studying
        </p>
        <button className='btn btn-warning ' variant="primary">Go somewhere</button>
      </div>
    </div>

  )
}

function Cards() {
  return (

    <div className='container'>
      <div class="row">

        <div class="col-md-6 col-sm-12 col-lg-6 col-xs-12">
          <div class="card">
            <img src={pic1} class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <div className='learner'>
                <span>2-3hrs</span>
                <span>24,3456 learners</span>
              </div>


              <div class="card-text row row-cols-2">
                <button className="btn btn-warning btnleft"> More info</button>
                <button className='btn btn-primary btnright'> Start Learning</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6 col-xs-12">
          <div class="card">
            <img src={pic1} class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <div className='learner'>
                <span>2-3hrs</span>
                <span>24,3456 learners</span>
              </div>


              <div class="card-text row row-cols-2">
                <button className="btn btn-warning btnleft"> More info</button>
                <button className='btn btn-primary btnright'> Start Learning</button>
              </div>
            </div>
          </div>
        </div>

        <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="card">
            <img src={pic2} class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <div className='learner'>
                <span>2-3hrs</span>
                <span>24,3456 learners</span>
              </div>
              <div class="card-text row row-cols-2">
                <button className="btn btn-warning btnleft"> More info</button>
                <button className='btn btn-primary btnright'> Start Learning</button>
              </div>
            </div>
          </div>
        </div>

        <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="card">
            <img src={pic2} class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <div className='learner'>
                <span>2-3hrs</span>
                <span>24,3456 learners</span>
              </div>
              <div class="card-text row row-cols-2">
                <button className="btn btn-warning btnleft"> More info</button>
                <button className='btn btn-primary btnright'> Start Learning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






  )
}