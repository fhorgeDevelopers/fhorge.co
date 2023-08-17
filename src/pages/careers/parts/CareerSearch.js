import React from 'react';
import Style from './search.module.css';
import { useState } from 'react';
import { useCalls } from '../../../providers/Calls';

const CareerSearch = () => {
    const call = useCalls();
    const [careerQuery, setCareerQuery] = useState();

    const careerSearchCall = (e) => {
        e.preventDefault();
        if (careerQuery.length > 1) {
            call.searchCareer(careerQuery);
        } 
    }

    return (
        <div className='col-md-9 mb-4'>
            <form className='d-inline-flex align-items-center w-100' onSubmit={(e) => { careerSearchCall(e) }}>
                <label className='p-3 d-md-block d-none'>
                    Get started by selecting a career, or
                </label>
                <div className={`d-inline-flex ${Style.searchBox}`}>
                    <input type={'text'} name={'careerSearch'} value={careerQuery} onChange={(e) => setCareerQuery(e.target.value)} className={`${Style.searchInput}`} placeholder="Search for the career of your dreams" />
                    <button className={`${Style.searchButton} p-2`} type="submit">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CareerSearch
