import React from 'react'
import { useCalls } from '../../../providers/Calls'
import Style from './cattop.module.css'

const CatTop = ({ category, color }) => {
    const calls = useCalls();
    return (
        <section className={`p-2`}>
            <div className='row justify-content-between'>
                <div className={`${color === "dark" ? "darkNav" : "lightNav"} p-2 col-md-8 text-center`}>
                    <img src={category.details[0].header_image_url} alt={category.career_category} style={{ width: '90%' }} className={`img-responsive`} />
                    <h2>
                        {category.career_category}
                    </h2>
                    <p className='text-center'>
                        {category.details[0].career_description}
                    </p>
                </div>
                <div className={`${color === "dark" ? "darkNav" : "lightNav"} p-2  col-md-3 text-center`}>
                    <h5 className='m-3 p-3 mb-0 pb-1 mt-0 pt-0'>
                        OUR CATEGORIES
                    </h5>
                    {calls.careerCategories.length === 0 ? "" : (
                        <>
                            <ul className='m-0 p-0'>
                                {calls.careerCategories.map((all_category) => (
                                    <>
                                        <li
                                            className={`
                                                ${(color === "light") ? `${Style.lightDesign}` : `${Style.darkDesign}`} 
                                                ${(category.career_category_id === all_category.career_category_id) ? `${Style.active}` : ``}
                                            `}>
                                            <p>
                                                {all_category.career_category}
                                            </p>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CatTop
