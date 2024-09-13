import { PrimaryButton } from '@/components/atoms/primary-button';
import { companyValuesData } from '@/constants/about';
import { investorData } from '@/constants/investorData'
import { stats2 } from '@/constants/stats'
import { teamData } from '@/constants/teamData';
import Image from 'next/image'
import React from 'react'
import { BsScissors } from "react-icons/bs";
export const AboutTemplate = () => {
  return (
      <section className="py-4 py-md-4 py-lg-4 overflow-hidden bg-warning-light">
  <div className="container">
    <div className="mw-lg mw-md-2xl mx-auto mw-lg-none">
      <div className="position-relative mb-4 mb-md-4">
        <div className="mw-lg-5xl mx-auto">
        <h1 className="fw-medium mb-4">About</h1>
          <Image width={100} height={100} className="d-block w-100 rounded-3" layout='responsive'  src="/images/about-banner.jpg" alt="banner"/>
        </div>
        <div className="mt-4 py-4 bg-warning-light border border-warning rounded-3 position-relative">
          <div className="row">
            {
                stats2.map((item,id)=>(
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0 position-relative" key={id}>
                    <div className={`d-none d-md-block position-absolute top-0 h-100 end-0 ${item.id === 4 ? " border-0" :"border-end "}`}></div>
                    <div className="text-center py-4 py-lg-0">
                      <span className="d-block mb-2 text-light-dark">{item.name}</span>
                      <span className="h2 fw-semibold">{item.number}</span>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
      <div className="mw-lg-5xl mx-auto">
        <div className="mb-5">
          <h3 className="font-heading mb-4 text-center fs-4">Dedicated to Infusing Joy into Education</h3>
          <div className="row mb-4 mb-md-4">
            <div className="col-12 col-md-6">
              <p className="fs-6 text-light-dark">We are driven to transform the landscape of learning into a captivating journey of excitement and discovery. Our aim is to infuse every educational experience with the essence of joy.</p>
            </div>
            <div className="col-12 col-md-6">
              <p className="fs-6 text-light-dark">Guided by our fervent belief in the power of education, we weave a tapestry of dynamic interactions that seamlessly blend technology, interactivity, and meaningful human connections.</p>
            </div>
          </div>
        </div>
        <h3 className="font-heading  text-center fs-4">Our Investor</h3>
        <div className="rounded-3 py-4 mb-4 mb-md-4">
          <div className="row flex-wrap">
            {
                investorData.map((item,id)=>(
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={id}>
                     <Image width={100} height={100} layout='responsive' src={item.imgSrc} alt="banner"/>
                    </div>
                ))
            }
          </div>
        </div>
        <div className="mb-4 mb-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="font-heading mb-4">{companyValuesData[0].heading}</h3>
              <Image width={100} height={100} layout='responsive' className="rounded-3 mb-4" src={companyValuesData[0].images} alt="hair"/>
              <Image  width={100} height={100} className="rounded-3" layout='responsive' src={companyValuesData[0].images2}  alt="hair"/>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column mw-md h-100">
                <p className="text-light-dark mb-6">{companyValuesData[0].description}</p>
                <ul className="list-unstyled mb-4">
                {companyValuesData[0].values.map((item,id)=>(
                    <li className="d-flex mb-2 align-items-center" key={id}>
                  <BsScissors size={18}  className='me-2'/>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}                 
                </ul>
                <Image  width={100} height={100} className="rounded-3 h-100" layout='responsive' src={companyValuesData[0].footerImage} style={{objectFit:"cover"}}  alt="hair"/>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h4 className="mb-6 text-center">Meet the team</h4>
          <p className="text-light-dark mb-0">A dynamic group of individuals united by passion and expertise</p>
        </div>
        <div className="row mb-4 flex-wrap">
            {
                teamData.map((item,id)=>(
                    <div className="col-12 col-lg-4 mb-4 -lg-0 text-white" key={id}>
                    <div className="position-relative rounded-3 overflow-hidden">
                      <img className="position-relative img-fluid d-block w-100" src={item.imgSrc} alt="banner"/>
                      <div className="position-absolute bottom-0 start-0 px-4 py-4" >
                        <span className="d-block fs-6 fw-bold">{item.name}</span>
                        <span className="small">{item.position}</span>
                      </div>
                    </div>
                  </div>
                )) 
            }
        </div>
        <div className="position-relative p-4 rounded-3 bg-dark overflow-hidden">
                   <div className="position-relative text-center">
                <h4 className="text-white mb-4">Join us on our Team</h4>
               <PrimaryButton title={"Click Here"}/>
              </div>
              </div>
            </div>
        </div>
      </div>
      </section>
  )
}
