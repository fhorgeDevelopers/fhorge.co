import React from 'react'
import { useMode } from '../../providers/Mode'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import '../../css/occupations--categories.css';
import Style from './style.module.css'
import { useCalls } from '../../providers/Calls';
import { Link } from 'react-router-dom';
import Top from './parts/Top';

const AllCareers = () => {
    const mode = useMode();
    const calls = useCalls();
    return (
        <>
            <Navigation />
            <main style={{ minHeight: '40vh' }} id="new_careers" className={`${mode.myMode === 'light' ? "" : ""}`}>
                <Top title={'Career Guide'} />
                <div className={`${mode.myMode === 'light' ? "textDark" : "textLight"} row search-bar`}>
                    
                    <div className='col-md-10'>
                        <div className='row'>
                            {calls.careerCategories.length === 0 ? null : (
                                <>
                                    {calls.careerCategories.map((category) => (
                                        <div className='col-sm-5 col-md-4'>
                                            <div className="occupations-card-wrapper">
                                                <Link to={`/careers/${category.career_category_id}`}>
                                                    <div
                                                        className="occupations-card-top"
                                                        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${category.image_url})` }}
                                                    >
                                                        <div className="occupations-card-top-outer-wrap">
                                                            <div className="occupations-card-top-inner-wrap">{category.image_url} </div>
                                                        </div>
                                                    </div>
                                                    <div className="occ-card-base hidden">
                                                        <span className="card-bottom-heading">{category.career_category}</span>
                                                        <p>{category.career_description}...</p>
                                                        <div className="row occ-card-base-el">
                                                            <div className="col-xs-6 text-left"> View Careers </div>
                                                            <div className="col-xs-6 text-right">
                                                                <span className="icon-filter_down arrow-icon"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}


export default AllCareers