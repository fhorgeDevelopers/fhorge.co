import React, { useState } from 'react'
import { Button } from "bootstrap"
import "./earn.css"
import pic1 from "./img/icon1.png";
import pic2 from "./img/icon2.png"
import pic3 from "./img/icon3.png"
import login from "./img/icon1.png"
import logo from "../../img/fhorge_logo_secondary.png"
import Navigation from '../components/Navigation/Navigation';
import Switch from '../home/Switch';



const hobby = [
    {
        id: 1,
        content: "i want to",
        skill: "upskil;"
    },
    {
        id: 2,
        content: "i want to",
        skill: "Change carrier;"
    },
    {
        id: 3,
        content: "i want to explore",
        skill: "hobbies $ interest",
    },

]

export default function Earn() {
    const [Hobbbies, setHobby] = useState(hobby);
    return (
        <>
            <Navigation />
            <Switch />
            <Header />
            <PictureRow />
            <Empower />
            <Empower2 />
            <Empower />
            {/*<Goal Hobbbies={Hobbbies}/>*/}
            <Lastpart />
        </>
    )
}

function Header() {
    return (
        <div className="Container">
            <header className='col-lg-12'>
                <h1 className='head'> Earn Money By Empowering Millions</h1>
            </header>
        </div>
    )
}
function PictureRow() {
    return (
        <>
            <div className='container'>
                <div className="step">
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="pic" >
                                <img src={pic1} alt="1" />
                                <p> Afffilate Marketing</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="pic" >
                                <img src={pic2} alt="1" />
                                <p> Afffilate Marketing</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="pic" >
                                <img src={pic2} alt="1" />
                                <p> Afffilate Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
function Empower() {
    return (
        <div className="Empower">
            <div className="container">
                <div className="left">
                    <div className="col-md-6 col-xs-12">
                        <h1>Empower Your Friends & Family By Sharing
                            Free Quality Education</h1>
                        <p>Refer your friends, family and
                            social network to Alison and earn free Digital Certificates and Digital Diplomas. Refer as many people
                            as you want to - the more you refer, the more rewards you unlock!</p>

                        <button> Share and Earn Reward </button>
                    </div>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <img src={pic3} />
                </div>
            </div>
        </div>
    )
}
function Empower2() {
    return (
        <div className="Emp">
            <div className="container">
                <div className="left">
                    <div className='col-md-6'>
                        <img src={login} />
                    </div>
                </div>

                <div className='right'>
                    <div className="col-md-6 col-sm-6">
                        <h1>Teach On Fhorge, Earn Money & Inspire Millions</h1>
                        <p>If you are a subject matter expert or a skilled professional who wants to create and publish online courses, then you’ve come to the right place. Share your knowledge with a globalaudience and earn an income through our shared revenue offering. Join our community of Course Creators today!</p>

                        <button> Share and Earn Reward </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Lastpart() {
    return (
        <div className="lastpart">
            <div className="container">
                <div className="left">
                    <div className='col-md-6'>
                        <p className='content'>
                            “Education underpins all social progress. Our aim is to harness technology to make all education and skills training available to anyone, anywhere for free”
                        </p>
                        <span> Tobi jc</span>
                    </div>
                </div>

                <div className="right">
                    <div className='col-md-6'>
                        <img src={logo} />
                        <p>
                            Founded In Nigeria<br></br> Developed Worldwide
                            Learn <br /> about Our Story
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/*function Goal({Hobbbies}){


    return(
        <>

        <div className='container text-center'>
            <h1>Not sure where to begin? What is your main goal on Alison?</h1>
            <col className='col-md-3'>
                <h1> i need a skill</h1>
            </col>
            <col className='col-md-3'>
                <h1> i need a skill</h1>
            </col>
            <col className='col-md-3'>
                <h1> i need a skill</h1>
            </col>
            </div> 
         </>
       
       

    )
}*/}