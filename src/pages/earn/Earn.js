import React from 'react'
import "./index.css";
import '../../css/homepage.css'
import { useMode } from '../../providers/Mode';
import pic1 from "./img/1.png";
import pic2 from "./img/2.png";
import picc3 from "./img/3.png"
import login from "./img/login.png";
import tobi from './img/tobi.png'
import "../../css/homepage-lower.css";
import Navigation from '../components/Navigation/Navigation';
import Switch from '../home/Switch';
import Footer from '../components/Footer/Footer';



const hobby = [
    {
        id: 1,
        content: "i want to",
        skill: "upskill"
    },
    {
        id: 2,
        content: "i want to Change",
        skill: " carrier"
    },
    {
        id: 3,
        content: "i want to explore",
        skill: "interest",
    },

]


export default function Earn() {
    const mode = useMode();
    const hobbies = hobby
    return (
        <>
            <Navigation />
            <main style={{ minHeight: '40vh' }}>
                <div class="intro">
                    <div class="inner">
                        <Switch />
                        <Header />
                        <Cards />
                    </div>
                </div>
                <Empower />
                <Empower2 />
                <Goal mode={mode} Hobbbies={hobbies} />
                <Lastpart />
            </main>
            <Footer />
        </>
    )
}

function Cards() {
    return (
        <div className='container'>
            <div class="row">
                <div class="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                    <div class="cards">
                        <img src={picc3} className="card-img-top" alt="..." />
                        <div class="card-body" >
                            <div className='bar'>
                                <p className='text-left'> Ui/ Ux design</p>
                                <span className='material-symbols-outlined text-right'>a
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                    <div class="cards ">
                        <img src={pic1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='bar'>
                                <p className='text-left'> Afffilate Marketing</p>
                                <span className='material-symbols-outlined text-right'>a
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12">
                    <div class="cards ">
                        <img src={pic2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='bar'>
                                <p className='text-left'>Web Programming</p>
                                <span className='material-symbols-outlined text-right'>a
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Header() {
    const mode = useMode();
    return (<h1 className={`head`}> Earn Money By Empowering Millions</h1>)
}

function Empower() {
    return (
        <div className="Empower">
            <div className="container">
                <div className='row'>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="left">
                            <h1>Empower Your Friends & Family By Sharing
                                Free Quality Education</h1>
                            <p>Refer your friends, family and
                                social network to Alison and earn free Digital Certificates and Digital Diplomas. Refer as many people
                                as you want to - the more you refer, the more rewards you unlock!</p>

                            <button className='btn-group'> Share and Earn Reward </button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='right'>
                            <img src={login} className='' />
                        </div>
                    </div>
                </div></div>
        </div>

    )
}
function Empower2() {
    return (
        <div className="Emp">
            <div className="container">
                <div className="left">
                    <div className='col-md-6 col-sm-12 col-xs-12'>
                        <img src={login} />
                    </div>
                </div>

                <div className='right'>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <h1>Teach On Fhorge, Earn Money & Inspire Millions</h1>
                        <p>If you are a subject matter expert or a skilled professional who wants to create and publish online courses, then you’ve come to the right place. Share your knowledge with a globalaudience and earn an income through our shared revenue offering. Join our community of Course Creators today!</p>

                        <button className='btn-group'> Share and Earn Reward </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
function Lastpart() {
    return (
        <div className="lastpart" style={{ paddingTop: "100px" }}>
            <div className="container">
                <div className="left">
                    <div className='col-md-6 col-sm-6'>
                        <p className='content'>
                            “Education underpins all social progress. Our aim is to harness technology to make all education and skills training available to anyone, anywhere for free”
                        </p>

                        <div className='creator container'>
                            <div className=''>
                                <img src={tobi} className='left' />
                            </div>


                            <div className='right'>
                                <div className='' style={{
                                    paddingLeft: "30px",
                                    marginTop: "-5px"
                                }}>
                                    <h3 style={{ marginBottom: "0px" }}> Tobi jc</h3>
                                    <span>the Creative Mind</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="right" style={{ paddingTop: "20px" }}>
                    <div className='col-md-6 col-sm-6'>
                        <img src={'/logo.png'} style={{ height: "60px", }} />
                        <p style={{ paddingLeft: "10px" }}>
                            <br />
                            Founded In Nigeria<br></br>Developed Worldwide
                            Learn <br /> <a>about</a> <a>Our Story</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Goal({ Hobbbies, mode }) {
    return (
        <div className={`${((mode.myMode === 'dark') ? "darkNav" : "lightNav")} text-center container goal`}>
            <h1>Not sure where to begin ?<br></br> What is your main goal on Alison?</h1>

            {Hobbbies.map((hobby) => (
                <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
                    <div className=' goalbox'>
                        <em> {hobby.content}</em>
                        <h3> {hobby.skill}</h3>
                    </div>
                </div>


            ))}

        </div>




    )
}