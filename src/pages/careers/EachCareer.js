import React from 'react'
import { useParams } from 'react-router'
import Navigation from '../components/Navigation/Navigation'

const EachCareer = () => {
    let { category_id, career_id } = useParams()

    return (
        <>
            <Navigation />
            {career_id}
        </>
    )
}

export default EachCareer