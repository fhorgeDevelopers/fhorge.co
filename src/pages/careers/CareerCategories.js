import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useCalls } from '../../providers/Calls';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

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
                <section>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='card m-3'>
                                <div className='card-header' style={{ textTransform: 'uppercase' }}>
                                    {category_id}
                                </div>
                                <div className='card-body'>
                                    <ol>
                                        {calls.careerCategory.length === 0 ? null : (
                                            <>
                                                {calls.careerCategory.map((each) => (
                                                    <li key={each.id} style={{ listStyle: 'korean-hangul-formal' }}>
                                                        <Link to={`/careers/${category_id}/${each.career_ref}`}>
                                                            {each.career_name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </>
                                        )}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CareerCategories