import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useCalls } from '../../providers/Calls';
import Navigation from '../components/Navigation/Navigation'

const EachCareer = () => {
    let { category_id, career_id } = useParams();
    const calls = useCalls();

    useEffect(() => {
      calls.getCareerDetail(category_id, career_id);
    
      return () => {
        return career_id;
      }
    }, [career_id])
    

    return (
        <>
            <Navigation />
            {career_id}
        </>
    )
}

export default EachCareer