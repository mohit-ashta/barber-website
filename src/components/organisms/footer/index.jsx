import { PrimaryButton } from "@/components/atoms/primary-button";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__info-container">
          <div className="footer__info-content">
            <h4 className="footer__info-title">
              Blade<sub> & Fade</sub>
            </h4>
            <p className="footer__content-description">
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many
            </p>
            <ul className="footer__social-media">
              <li className="social-media__item">
                <FaFacebook size={22} />
              </li>
              <li className="social-media__item">
                <FaInstagram size={22} />
              </li>
              <li className="social-media__item">
                <FaXTwitter size={22} />
              </li>
            </ul>
          </div>

          <div className="footer__info-news">
            <h5 className="footer__news-title">Newsletter</h5>
            <form className="footer__news-form">
              <input
                type="email"
                placeholder="cuisoft@email.com"
                aria-label="informe seu email para novidades"
                className="footer__news-input"
                required
              />
              <PrimaryButton title={"send me"} className={"footer__news-btn"} />
            </form>
            <span className="footer__news-description">
              le English. Many desktop publishing packages and web page editors
              now use Lorem Ipsum a
            </span>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="footer__copyright-container">
          <p className="copyright">
            Blade & Fade &copy; 2024. All rights reserved.
          </p>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link href="#about" className="footer__nav-link">
                  shop
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link href="#services" className="footer__nav-link">
                  service
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link href="#prices" className="footer__nav-link">
                  price
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link href="#appointment" className="footer__nav-link">
                  appointment
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
