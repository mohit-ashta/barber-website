import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoLink } from "react-icons/go";
export const ServiceTemplate = () => {
  return (
<>
<section className="py-4 pt-md-4 pb-md-5 bg-light-light overflow-hidden">
    <div className="container">
      <h1 className="fw-medium mb-4">Services</h1>
      <div className="mw-lg mw-lg-xl mx-auto mw-xl-none">
        <div className="row">
          <div className="col-12 col-xl-6 mb-4 mb-xl-0">
            <div className="h-100 border rounded-5 shadow-lg">
              <Image width={100} height={100} className="d-block mb-5  rounded-5 w-100 h-100" layout='responsive' style={{maxHeight:"360px", objectFit:"cover"}} src="/images/hair1.jpg" alt="hair1" />
              <div className="px-4 px-md-4 pb-4 text-center">
                <span className="badge mb-4 bg-dark text-white">Classic Cut</span>
                <span className="d-block fs-3 mb-4">Planning strategies</span>
                <p className="fw-medium mb-4">Enjoy a special bonding experience with haircuts for both father and son at a discounted rate.Combine a Modern Cut, Beard Trim, and Hair Color for a complete transformation.</p>
                <Link className="btn btn-light-light fw-semibold p-0 pb-2 border-0 border-2 border-dark border-bottom rounded-0" href="#">
                  <span className="me-3">See all projects</span>
                  <GoLink size={22} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <Link className="btn mb-3 p-0 w-100 text-start border rounded-5 shadow-lg" href="#">
              <div className="row mx-0 justify-content-between">
                <div className="col-12 col-md-7 ps-4 ps-sm-12 pe-5 py-0 align-self-center">
                  <div className="mw-xs py-4 py-xl-4">
                    <span className="badge mb-4 border border-dark text-dark">Buzz Cut</span>
                    <span className="d-block fs-3 mb-4">Scalp Treatment</span>
                    <p className="mb-0">Fun and friendly haircuts for the little ones, ensuring they leave with a smile.Quick, clean, and stylish. Perfect for those who prefer a low-maintenance look</p>
                  </div>
                </div>
                <div className="col-12 col-md-5 p-0" style={{height:"370px"}}>
                <Image width={100} height={100} className="w-100  rounded-5 h-100 " src="/images/hair2.jpg" layout='responsive'  style={{objectFit:"cover"}} alt="hair2" />
                </div>
              </div>
            </Link>
            <Link className="btn p-0 w-100 text-start border rounded-5 shadow-lg" href="#">
              <div className="row mx-0 justify-content-between">
                <div className="col-12 col-md-7 ps-4 ps-sm-4 pe-4 py-0 align-self-center">
                  <div className="mw-xs py-4 py-xl-4">
                    <span className="badge mb-4 border border-dark  text-dark">Kids' Cut</span>
                    <span className="d-block fs-3 mb-4">Special Occasion Styling</span>
                    <p className="mb-0">Nourish your scalp and promote healthy hair growth with our rejuvenating treatments.Perfect for weddings, parties, or any special event where you need to look your best.</p>
                  </div>
                </div>
                <div className="col-12 col-md-5 p-0" style={{height:"370px"}}>
                <Image width={100} height={100} className="w-100 h-100 rounded-5" layout='responsive'  style={{objectFit:"cover"}}  src="/images/hair3.jpg"  alt="hair3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="position-relative py-5 bg-white overflow-hidden" >
  <div className="position-relative container z-92" >
    <div className="row g-4">
      <div className="col-12 col-md-6">
        <span className="badge mb-3 bg-success-dark text-dark text-uppercase border px-3 py-2">Detail</span>
        <h2 className="font-heading mb-3 fs-5">Classic Cut</h2>
        <p className="mb-3 fs-6 fw-semibold text-secondary">Experience a timeless look with our Classic Cut, tailored to suit your individual style.</p>
        <p className="mb-3 fs-6 fw-medium text-secondary">Stay on trend with the latest hairstyles, expertly crafted by our talented barber .results wherever they show up. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
        <p className="mb-3 fs-6 fw-medium text-secondary">Quick, clean, and stylish. Perfect for those who prefer a low-maintenance look.</p>
        <p className="mb-0 fs-6 fw-medium text-secondary">Fun and friendly haircuts for the little ones, ensuring they leave with a smile.</p>
      </div>
      <div className="col-12 col-md-6">
        <p className="mb-3 fs-6 fw-medium text-secondary">Enjoy a luxurious, close shave with hot towels and premium shaving products.</p>
        <ul className="list-unstyled">
          <li className="fs-6 fw-medium text-secondary">1.Includes a Classic Cut</li>
          <li className="fs-6 fw-medium text-secondary">2.Traditional Shave</li>
          <li className="fs-6 fw-medium text-secondary">3.Scalp Treatment for the ultimate grooming experience..</li>
        </ul>
        <p className="mb-0 fs-6 fw-medium text-secondary">Enjoy a special bonding experience with haircuts for both father and son at a discounted rate.</p>
      </div>
    </div>
  </div>
</section>
  </>
  )
}
