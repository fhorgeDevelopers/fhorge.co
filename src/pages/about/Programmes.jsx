
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import style  from './program.module.css'
import { Helmet } from 'react-helmet'
import {FcShare} from 'react-icons/fc'
import {PiArrowBendDownLeftDuotone, PiArrowBendDownRightBold} from 'react-icons/pi'
import {FaUserFriends} from 'react-icons/fa'
import { GiCash } from 'react-icons/gi'
import {PiArrowBendRightDownDuotone ,PiArrowBendDownRightDuotone} from 'react-icons/pi'
import { useState, useEffect } from 'react'

const Programmes = () => {
    const [PhoneScreen, setPhoneScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => { 
            if (window.innerWidth <= 769) {
                setPhoneScreen(true)
            } else {
                setPhoneScreen(false)
            }
        }
        handleResize()

        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
   },[])
    return (
        <>
          <Helmet>
                <title>
                    Referal Program About
                </title>
            </Helmet>
            <Navigation />
            <div className={style.ProgrammeContainer}>
                <div className={style.programContent}>
                    <h1>Refer A Friend and Earn Rewards</h1>
                    <p>
                        Refer your friends to Alison and get 50% off Digital Certificates and Digital Diplomas.
                        Refer as many people as you want to - the more you refer, the more you could earn!
                    </p>
                    <button>start refering my friend</button>
                </div>
            </div>
            <div className={style.stepContainer}>
                <div className={style.stepContent}>
                    <div className={style.stepCol}>
                    <h1>Share</h1>
                        <FcShare size={100} />
                        <p>
                        <span>Step 1:</span>

                        Share your unique link with your friends, family, or contacts through social media or email.
                        </p>
                    </div>
                    <div className={style.stepCol}>
                        {PhoneScreen ?  <PiArrowBendRightDownDuotone size={50}/> :  <PiArrowBendDownRightDuotone size={50} />}
                    </div>
                    <div className={style.stepCol}>
                    <h1>Complete</h1>
                        <FaUserFriends size={100} />
                        <p>
                        <span>Step 2:</span>

                        Your friends register on Alison through your unique link, and complete a course within 30 days of registering.
                        </p>
                    </div>
                    <div className={style.stepCol}>
                        {PhoneScreen ?  <PiArrowBendRightDownDuotone size={50}/> :  <PiArrowBendDownRightDuotone size={50} />}
                    </div>
                    <div className={style.stepCol}>
                    <h1>Earn Reward</h1>
                        <GiCash size={100} />
                        <p>
                        <span>Step 3:</span>

                        You’re rewarded with a 50% discount on Digital Certificates/Diplomas and your friends get a 10% discount on their first purchase.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.referContainer}>
                <div className={style.referContent}>
                    <h1>Refer A Friend Rewards</h1>
                    <div className={style.referItem}>
                    <p>3 friends complete a course = <b>you get 50% off a Digital Certificate.</b></p>
                    <p>3 friends complete a course = <b>you get 50% off a Digital Certificate.</b></p>
                    </div>
                    <div className={style.referItem}>
                        <p>Check the progress of your referred friends anytime through your Refer a Friend Progress table on your Stats Page . You can also check them on your Dashboard .</p>
                        <div className={style.smallBtn}>see my stats</div>
                    </div>
                    <div className={style.referItem}>
                    <p>Your friends will get a 10% DISCOUNT on their first purchase if they register through your link and complete a course. They must register on Alison through your link and complete a course within 30 days.</p>
                    </div>
                </div>

            </div>
        <Footer />
        </>
    )
}

export default Programmes