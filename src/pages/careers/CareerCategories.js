import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useCalls } from '../../providers/Calls';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import Top from './parts/Top';
import '../../css/occupations--categories.css';

const CareerCategories = () => {
    let { category_id } = useParams();
    const calls = useCalls();

    useEffect(() => {
        calls.specificCareerCategory(category_id);

        return () => {
            return true;
        }
    }, [category_id])

    return (
        <>
            <Helmet>
                <meta name="description" content={`${category_id}`} />
            </Helmet>
            <Navigation />

            <main style={{ minHeight: '40vh' }}>
                <Top title={category_id} />
                <section className='container row'>
                    <div className='col-md-12'>
                        <div className='card-body row'>
                            <ol>
                                {calls.careerCategory.length === 0 ? null : (
                                    <>
                                        {calls.careerCategory.map((category) => (
                                            <div className='col-sm-5 col-md-4'>
                                                <div class="occupations-card-wrapper">
                                                    <Link to={`/careers/${category.career_category_id}`}>
                                                        <div
                                                            class="occupations-card-top"
                                                            style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${category.image_url})` }}
                                                        >
                                                            <div class="occupations-card-top-outer-wrap">
                                                                <div class="occupations-card-top-inner-wrap">{category.career_name} </div>
                                                            </div>
                                                        </div>
                                                        <div class="occ-card-base hidden">
                                                            <span class="card-bottom-heading">{category.career_name}</span>
                                                            <p>{category.career_description}...</p>
                                                            <div class="row occ-card-base-el">
                                                                <div class="col-xs-6 text-left"> {category.career_name}
                                                                    <span class="material-symbols-outlined">
                                                                        arrow_right_alt
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </ol>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CareerCategories