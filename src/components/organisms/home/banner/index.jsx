import Link from 'next/link'
import React from 'react'

export const Banner = () => {
  return (
    <section className="header" id="header">
    <div className="banner__shadow">
      <div className="banner__content">
        <div className="banner__content-intro">
          <span className="content-intro__welcome">Cuts & Conversations</span>
          <h2 className="content-intro__title">Make Unique Style</h2>
          <p className="content-intro__message">Vintage Vibes Barber Shop</p>
          <Link href="#services" className="primary-btn">
            Go to Sharp Edge
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}
