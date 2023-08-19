import React from 'react'
import Style from './cattop.module.css'
import './dummy.css'

const DummyCatTop = ({ color }) => {
    return (
        <section className={`p-0`}>
            <div className='row justify-content-start'>
                <div className={`${color === "dark" ? `${Style.darkNav}` : `${Style.lightNav}`} d-flex p-0 col-md-12 text-center careerTop`}>
                    <div style={{ width: '450px', height: '300px', border: 'none' }} className={`dummyHone ${color} img-responsive m-0`}></div>
                    <div style={{ flexGrow: '1' }} className='p-3'>
                        <h2 className={`${color} dummyHone`}>
                            Title
                        </h2>
                        <p className={`${color} dummyHone`} style={{ minHeight: '100px' }}>
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
