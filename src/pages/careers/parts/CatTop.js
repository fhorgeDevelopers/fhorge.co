import React from 'react'
import { useCalls } from '../../../providers/Calls'
import Style from './cattop.module.css'

const CatTop = ({ category, color }) => {
    const calls = useCalls();
    return (
        <section className={`p-0`}>
            <div className='row justify-content-start'>
                <div className={`${color === "dark" ? `${Style.darkNav}` : `${Style.lightNav}`} d-flex p-0 col-md-12 text-center careerTop`}>
                    <img src={category.details[0].header_image_url} alt={category.career_category} style={{ width: '450px' }} className={`img-responsive m-0`} />
                    <div style={{ flexGrow: '1' }} className='p-3'>
                        <h2>
                            {category.career_category}
                        </h2>
                        <p className='text-center'>
                            {category.details[0].career_description}
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default CatTop
