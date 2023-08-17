import React from 'react'
import Style from './cattop.module.css'

const DummyCatTop = ({color}) => {
    return (
        <section className={`p-0`}>
            <div className='row justify-content-start'>
                <div className={`${color === "dark" ? `${Style.darkNav}` : `${Style.lightNav}`} d-flex p-0 col-md-12 text-center careerTop`}>
                    <img src={'/logo.png'} alt={'...'} style={{ width: '450px' }} className={`img-responsive m-0`} />
                    <div style={{ flexGrow: '1' }} className='p-3'>
                        <h2>
                            Title
                        </h2>
                        <p className='text-center'>
                            Description
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default DummyCatTop
