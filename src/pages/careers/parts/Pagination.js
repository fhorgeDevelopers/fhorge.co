import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './pagination.css'

const Pagination = ({ items, perpage }) => {
    const itemPerPage = perpage;
    const total = items.length;
    const pageCount = Math.ceil(total / itemPerPage);
    const [itemOffset, setItemOffset] = useState(0);
    const [endOffset, setEndOffset] = useState(itemPerPage)
    const [currentPage, setCurrentPage] = useState(1);
    const currentItems = items.slice(itemOffset, endOffset);


    const handleNext = () => {
        if (pageCount !== currentPage) {
            setCurrentPage(currentPage + 1);
            setItemOffset(itemOffset + itemPerPage);
            setEndOffset(endOffset + itemPerPage)
        }
    }
    const handlePrevious = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            setItemOffset(itemOffset - itemPerPage);
            setEndOffset(endOffset - itemPerPage)
        }
    }

    return (
        <div className='row'>
            {currentItems.map((category) => (
                <>
                    <div className='col-12 col-sm-6 col-md-4 mt-3' key={category.career_category_id}>
                        <div className="occupations-card-wrapper w-100">

                            <div
                                className="occupations-card-top"
                                style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${category.career_image})` }}
                            >
                                <div className="occupations-card-top-outer-wrap">
                                    <div className="occupations-card-top-inner-wrap">{category.career_name} </div>
                                </div>
                            </div>
                            <div className="occ-card-base hidden">
                                <Link to={`/careers/${category.career_category_id}/${category.career_ref}`}>
                                    <span className="card-bottom-heading">{category.career_name}</span>
                                    <p>{category.career_description}...</p>
                                    <div className="row occ-card-base-el">
                                        <div className="col-xs-6 text-left"> {category.career_name}
                                            <span className="material-symbols-outlined">
                                                arrow_right_alt
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </>
            ))}

            <div className='col-lg-12 mt-4 text-right'>
                <button onClick={() => handlePrevious()} className={currentPage === 1 ? 'd-none' : 'prevButton btn-info mr-3'} title={'Previous Page'} ></button>
                <button onClick={() => handleNext()} className={currentPage === pageCount ? 'd-none' : 'nextButton btn-info'} title={'Next Page'}></button>
                <br />
                <span>
                    {currentPage} of {pageCount} page(s)
                </span>
            </div>
        </div>
    )
}

export default Pagination