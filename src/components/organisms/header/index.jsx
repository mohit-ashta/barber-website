import { headerLinks } from "@/constants/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa6";
export const Header = () => {
  const path = usePathname();
  return (
    <header className="header bg-dark py-2">
        <div className="banner__content container">
          <div className="banner__content-hero">
            <h1 className="header__title">
              <Link href="#">
                Blade<sub>&Fade</sub>
              </Link>
            </h1>
            <FaBars size={32}   className="header__menu-icon" />
            <div className="nav-container">
              <nav className="header__nav">
                <ul className="header__nav-list m-0">
                  {
                    headerLinks.map((item,id)=>(
                      <li className="header__nav-item fs-6" key={id}>
                      <Link href={item.link} className={`header__nav-link ${path === item.link && "active"}`}>
                        {item.title}
                      </Link>
                    </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>
    </header>
  );
};
