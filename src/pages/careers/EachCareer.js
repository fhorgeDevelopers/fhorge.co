import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useCalls } from '../../providers/Calls';
import Footer from '../components/Footer/Footer'
 import '../../css/occupations--single-career-v11.css'

import Navigation from '../components/Navigation/Navigation'

const EachCareer = () => {
    let { category_id, career_id } = useParams();
    const calls = useCalls();

    useEffect(() => {
      calls.getCareerDetail(category_id, career_id);
    
      return () => {
        return career_id;
      }
    }, [career_id])
    

    return (
        <>
            <Navigation />
      <div id="new_careers" class="careers-single-career">

      <div class="ca-header">
        <div class="content-wrap">
        <section class="top-padding">
           <div class="container">
              <div class="row topbar">

                 <div class="topbar-pc">
                    <div class="breadcrumbs col-md-12 text-left text-sm-center">
                    <ul class="occupations-breadcrumbs">
                          <li> <a href="#">Career Guide</a> </li>
                          <li> <a href="#"> {career_id}</a> </li>
                          <li> <a href="#">{category_id}</a>  </li>
                    </ul>
                       {/* <ul class="occupations-breadcrumbs">
                        
                          <li> <a href="https://alison.com/careers">Career Guide</a> </li>
                          <li> <a href="https://alison.com/careers/finance">Finance</a>    </li>
                          <li> <a href="https://alison.com/careers/finance/accountant">Accountant</a>   </li>
                       </ul> */}
                    </div>
                 </div>


                 <div class="topbar-mob">
                    <div class="col-xs-6 text-left"><a href="https://alison.com/careers"><span class="icon-previous-icon"></span> Back</a></div>
                 </div>


              </div>
           </div>
        </section>
        <section>
           <div class="container container--no-padding-mobile">
              <div class="career-general-info loaded" id="general">
                 <div class="drop-shadow-box regular-box drop-shadow-box--general-info-mobile">
                    <div class="general-info-wrapper" data-name="Accountant">
                       <div class="row row--no-padding-mobile">
                          <div class="general-info-image-column col-sm-push-8 col-sm-4">
                             <picture>
                                <source srcset="https://cdn01.alison-static.net/careers/career/accountant-med.webp" media="(max-width: 768px)"/>
                                <img class="general-info-career-img" onerror="this.onerror=null;imgError(this)" src="https://cdn01.alison-static.net/careers/career/accountant.jpg" alt={`${career_id}`}/> 
                             </picture>
                          </div>
                          <div class="general-info-text-column col-sm-pull-4 col-sm-8">
                             <h1>{category_id}</h1>
                             <span class="h3">{career_id}</span> 
                             <div class="general-info-description">
                                <p>“Behind every good businessman is a great accountant” to ensure an organization’s financial records are accurate and appropriate taxes are paid on time. An Accountant provides the information needed by investors and business owners to evaluate how a company is doing. And “accountants do it all without lo...  <a href="#" class="general-info-read-more">Continue Reading</a> </p>
                                <div class="share">
                                   <div class="static-social-share social-buttons">
                                    <a href="#" target="_blank" rel="nofollow"> <i class="icon-facebook"></i> </a> 
                                    <a class="btn-twitter-utm" href="#" target="_blank" rel="nofollow"> <i class="icon-twitter"></i> </a>
                                     <a href="#" target="_blank" rel="nofollow"> <i class="icon-linkedin"></i> </a> <a href="#" id="top_social_share_whatsapp" data-action="share/whatsapp/share" target="_blank" rel="nofollow"> <span class="icon-whatsapp"></span> </a> </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           {/* <div id="gam_inner">

           </div> */}
        </section>
       </div>
       </div>

       {/* //section2 */}

    <div class="content-wrap">
     <div class="container">
        <div class="career-skills-and-salaries loaded">
           <div class="row">
              <div class="col-md-8 skills-box">
                 <div class="drop-shadow-box regular-box-white match-height" style={{ height: '149px'}}> <span class="h2">Skills this career requires an Accountant</span>  <a href="#0" data-slug="bookkeeping"> <span class="career-tag-badge skill skill--bookkeeping"> Bookkeeping </span> </a>  <a href="#0" data-slug="financial-analysis"> <span class="career-tag-badge skill skill--financial-analysis"> Financial Analysis </span> </a>  <a href="#0" data-slug="stress-management"> <span class="career-tag-badge skill skill--stress-management"> Stress Management </span> </a>  <a href="#0" data-slug="budgeting"> <span class="career-tag-badge skill skill--budgeting"> Budgeting </span> </a>  <a href="#0" data-slug="excel-365"> <span class="career-tag-badge skill skill--excel-365"> Excel 365 </span> </a>  <a href="#0" data-slug="quickbooks-knowledge"> <span class="career-tag-badge skill skill--quickbooks-knowledge"> Quickbooks Knowledge </span> </a>  <span class="career-tag-badge career-tag-badge--view-more">View more skills</span> </div>
              </div>
              <div class="col-md-4">
                 <div class="drop-shadow-box regular-box-white match-height" style={{height: '149px'}}>
                    <span class="h2">What is the Average Annual Salary of  <br/>an Accountant? <span class="info-badge info-badge--right icon-info" data-toggle="popover" data-html="true" data-content="Source:<br><a href='https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm#tab-5' target='_blank'>https://www.bls.gov/ooh/busine...</a><br><a href='https://www.accountancyage.com/2018/04/18/salary-survey-2018-uk-accountants-earning-right-now' target='_blank'>https://www.accountancyage.com...</a>" data-original-title="" title=""></span></span> 
                    <div class="row">
                       <div class="salaries-column salaries-column--left col-xs-6"> <span class="amount">$71,550</span><br/> <span class="flag"><img src="/html/site/img/careers/usa-flag.svg" width="29" height="22" alt="USA"/><span>USA</span></span> </div>
                       <div class="salaries-column salaries-column--right col-xs-6"> <span class="amount">£62,042</span><br/> <span class="flag"><img src="/html/site/img/careers/uk-flag.svg" width="29" height="22" alt="UK"/><span>UK</span></span> </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>

  {/* section3 */}
  <div class="content-wrap">
   <div class="container container--no-padding-mobile">
   <div class="career-related-courses">
         <span class="h2">Interested in this Career? Enrol in these free courses and get certificates!</span>
         <div class="courses-list">
         <div class="x-wide wide-cl courses-list--inner wrapper">
         <ul class="course-listing slick-enabled slick-career-related-courses slick-initialized slick-slider">
         <button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style={{display: 'inline-block'}}>Previous</button>


         <div aria-live="polite" class="slick-list draggable">
         <div class="slick-track" role="listbox" style={{opacity: '1', width: '100003px', left: '-1032px'}}>
         <div class="card card--white slick-slide slick-cloned" tabindex="-1" role="option" aria-describedby="slick-slide116"  data-slick-index="-4" id="" aria-hidden="true">
                             <div class="card__img"> <span class="course-type-1">  Certificate  </span> <img class="lazyload" width="254px" height="170px" data-src="https://cdn01.alison-static.net/courses/1888/alison_courseware_intro_1888.jpg" title="Professional Bookkeeping and Accounting 2:  Bank and Petty Cash"/> </div>
                             <div class="card__info">
                                <div class="card__top">
                                   <span>business</span>  
                                   <h3>Professional Bookkeeping and Accounting 2:  Bank and Petty Cash</h3>
                                </div>
                                <div class="card__bottom">
                                   <div class="card__details ">  <span class="card__duration" title="Estimated duration">2 - 3 hrs</span> <span class="card__enrolled" title="Users enrolled">15,739 learners</span>  <span class="card__publisher" style={{display: 'none'}}> <a href="https://alison.com/course/professional-bookkeeping-and-accounting-2-bank-and-petty-cash#l-main-pub" title="The Excel Club" tabindex="-1"> By The Excel Club </a> </span>  </div>
                                   <div class="card__outcomes">
                                      <h5>You will learn how to</h5>
                                      <ul>
                                         <li class="br" title="Describe how to raise petty cash vouchers">Describe how to raise petty cash vouchers</li>
                                         <li class="visible" title="Explain how to enter petty cash transactions to the petty cash daybook">Explain how to enter petty cash transactions to the pett...</li>
                                         <li class="visible" title="Describe how to close the daybook and calculate the balance carried down">Describe how to close the daybook and calcula... <a class="card__more" title="Professional Bookkeeping and Accounting 2:  Bank and Petty Cash- Landing Page" href="https://alison.com/course/professional-bookkeeping-and-accounting-2-bank-and-petty-cash#outcomes" tabindex="-1">Read More</a></li>
                                      </ul>
                                   </div>
                                   <div class="card__nav"> <a class="card__more card__more--mobile" title="Professional Bookkeeping and Accounting 2:  Bank and Petty Cash - Landing Page" href="https://alison.com/course/professional-bookkeeping-and-accounting-2-bank-and-petty-cash" tabindex="-1">More Info</a> <a class="card__start  add-course-id " title="Professional Bookkeeping and Accounting 2:  Bank and Petty Cash - Start Learning" href="https://alison.com/courses/professional-bookkeeping-and-accounting-2-bank-and-petty-cash/content#event=login" data-id="1888" tabindex="-1">  Start Learning  </a> </div>
                                </div>
                             </div>
                             {/* <!-- END card__info --> */}
         </div>

         {/* continue */}



         </div>
         </div>
         </ul>
         </div>
         </div>

         <div class="career-related-courses-next occupations-slick-next slick-arrow">
            <span class="icon-thick-chevron-down"></span>
        </div>
   </div>

   </div>
  </div>
  {/* end section3 */}

     
     
     </div>


            
<Footer />
</>
    )
}

export default EachCareer