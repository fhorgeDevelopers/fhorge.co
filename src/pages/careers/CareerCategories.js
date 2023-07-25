import React from 'react'
import { useParams } from 'react-router'
import Navigation from '../components/Navigation/Navigation';

const CareerCategories = () => {
    let { category_id } = useParams();
    return (
        <>
            <Navigation />

            <section>
                {category_id}
            </section>
        </>
    )
}

export default CareerCategories