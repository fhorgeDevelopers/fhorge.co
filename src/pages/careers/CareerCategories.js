import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useCalls } from '../../providers/Calls';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import Top from './parts/Top';
import '../../css/occupations--categories.css';
import DummyCatTop from './parts/DummyCatTop';
import CatTop from './parts/CatTop';
import { useMode } from '../../providers/Mode';
import Style from './parts/cattop.module.css'
import './career.css'
import CareerSearch from './parts/CareerSearch';
import ReactPaginate from 'react-paginate';
import Pagination from './parts/Pagination';


const CareerCategories = () => {
    const { category_id } = useParams();
    const calls = useCalls();
    const mode = useMode();
    const color = mode.myMode;
    const thisCategory = category_id;

    const goNow = () => {
        calls.careerCategoryDetails(category_id);
        calls.getCareerCategory(category_id);
    }

    useEffect(() => {
        goNow();
        return () => {
            return true;
        }
    }, [category_id])

    return (
        <>
            {calls.categoryDetails.length === 0 ? (
                <>
                    <h1>
                        <i>loading...</i>
                    </h1>
                </>
            ) : (
                <>
                    <Helmet>
                        <meta name="description" content={calls.categoryDetails.details[0].meta_description} />
                        <meta name="keywords" content={calls.categoryDetails.details[0].meta_keywords} />
                        <title>
                            {calls.categoryDetails.details[0].meta_title}
                        </title>
                    </Helmet>
                </>
            )}
            <Navigation />

            <main style={{ minHeight: '40vh' }}>
                {/* <Top title={category_id} /> */}
                {calls.categoryDetails.length === 0 ? (
                    <>
                        <DummyCatTop color={mode.myMode} />
                    </>
                ) : (
                    <>
                        <CatTop category={calls.categoryDetails} color={mode.myMode} />
                    </>
                )}

                <section className='container-fluid row m-0 hstack '>
                    <CareerSearch />
                    <div className='col-md-9'>
                        <div className='card-body row'>
                            {calls.careerCategory.length === 0 ? null : (
                                <>
                                    <Pagination items={calls.careerCategory} perpage={3} />
                                </>
                            )}
                        </div>
                    </div>
                    <div className={`${color === "dark" ? "darkNav" : "lightNav"} p-2  col-md-3 text-center fmt-2`}>
                        <h5 className='m-3 p-3 mb-0 pb-1 mt-0 pt-0'>
                            CAREER CATEGORIES
                        </h5>
                        {calls.careerCategories.length === 0 ? "" : (
                            <>
                                <ul className='m-0 p-0'>
                                    {calls.careerCategories.map((all_category) => (
                                        <Link
                                            key={all_category.career_category_id}
                                            to={`/careers/${all_category.career_category_id}`}
                                            className={`
                                                ${(color === "light") ? `${Style.lightDesign}` : `${Style.darkDesign}`} 
                                                ${(all_category.career_category_id === thisCategory) ? `${Style.active}` : ``}
                                            `}>
                                            <p>
                                                {all_category.career_category}
                                            </p>
                                        </Link>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CareerCategories