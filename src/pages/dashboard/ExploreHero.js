import React from 'react';
import RightImage from '../../img/rightside_graphic.png';
import { useMode } from '../../providers/Mode';
import './explore.css';
import { Link } from 'react-router-dom';
import SmHero from '../../img/sm-hero.jpg';

const ExploreHero = () => {
    const mode = useMode();
    return (
        <>
            <section className={`${(mode.myMode === 'light') ? 'lightNav' : 'darkNav'} d-md-none`} style={{ padding: '5px 0px' }}>
                <div className='container-fluid p-0 m-0'>
                    <div className='row p-0 m-0'>
                        <div className='col-md-6 p-0 m-0 hero'>
                            <div className="row p-0 m-0">
                                <img src={SmHero} style={{ width: '100%' }} alt="start learning" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-centent-center">
                            <div className={'heroText'} >
                                <div>
                                    <h1 className="m-3">
                                        Why wait?
                                    </h1>
                                    <div>
                                        <h4 className="m-3 mb-0" style={{ lineHeight: "0px" }}>
                                            Get a little closer to your goals.
                                        </h4>
                                        <Link to={'/courses'} className="heroLabel m-3 mt-0" >
                                            Start learning new skills today.
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${(mode.myMode === 'light') ? 'lightNav' : 'darkNav'} d-md-block d-sm-none`}>
                <div className='container-fluid p-0 m-0'>
                    <div className='row p-0 m-0'>
                        <div className='col-md-12 p-0 m-0 hero' style={{ backgroundImage: `url(${RightImage})` }}>
                            <div className="row p-0 m-0">
                                <div className="col-md-6 d-flex justify-centent-center">
                                    <div className={'heroText'} >
                                        <div >
                                            <h1 className="m-3">
                                                Why Wait?
                                            </h1>
                                            <div>
                                                <h4 className="m-3 mb-0">
                                                    Get a little closer to your goals.
                                                </h4>
                                                <Link to={'/courses'} className="heroLabel m-3 mt-0" >
                                                    Start learning new skills today.
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreHero