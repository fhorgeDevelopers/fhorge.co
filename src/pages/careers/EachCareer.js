import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useCalls } from '../../providers/Calls';
import Footer from '../components/Footer/Footer';
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
      <main style={{ minHeight: '40vh' }}>
        <h4>
          {career_id}
        </h4>
      </main>
      <Footer />
    </>
  )
}

export default EachCareer