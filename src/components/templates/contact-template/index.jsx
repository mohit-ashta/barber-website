import Image from 'next/image'
import React from 'react'

export const ContactTemplate = () => {
  return (
    <section className="py-4 pt-sm-4 pb-sm-5">
  <div className="container">
    <div className="mw-md mx-auto text-start mb-4">
    <h1 className="fw-medium mb-4">Contact Us</h1>
      <p className="fs-5  lead" >Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum.Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum.Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum.</p>
    </div>
    <div className="mw-6xl mx-auto">
      <div className="row align-items-center">
        <div className="col-md-6 order-last order-md-first">
          <div className="position-relative mw-lg mw-lg-none mx-auto">
            <div className="position-absolute top-0 start-0 m-4 mw-xs pe-sm-4">
              <div className="py-4 px-4 bg-white bg-opacity-25 rounded-4 border border-white" style={{backdropFilter: "blur(10px)"}}>
                <span className="fw-bold fs-2">2000</span>
                <p className="mb-0">Serving clients since last 24 years.</p>
              </div>
            </div>
            <Image width={100} height={100} className="w-100" layout='responsive' src="/images/hair5.jpg" alt="banner" />
          </div>
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="mw-xs mx-auto">
            <div className="mb-4">
              <h6 className="fs-5 text-uppercase ">Email</h6>
              <span className="d-block fs-5 ">info@email.com</span>
              <span className="fs-5">support@gmail.com</span>
            </div>
            <div className="mb-4">
              <h6 className="fs-5 text-uppercase">Phone</h6>
              <span className="d-block fs-5 ">+1 848 4125 690</span>
              <span className="fs-5 ">+1 848 4125 658</span>
            </div>
            <div>
              <h6 className="fs-5 text-uppercase">Address</h6>
              <span className="d-block fs-5 ">380 St Kilda Road, Melbourne</span>
              <span className="fs-5 ">VIC 3004, Australia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
