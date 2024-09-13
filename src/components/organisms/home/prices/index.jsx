import { PrimaryButton } from "@/components/atoms/primary-button";
import { pricesData } from "@/constants/prices";
import { stats } from "@/constants/stats";
import React from "react";

export const Prices = () => {
  return (
    <section id="prices" className="prices">
      <div className="prices-container">
        <div className="prices-heading">
          <span className="tag">
            Blade <sub>& Fade</sub>
          </span>
          <h2 className="section__heading prices-heading__title">Our Prices</h2>
        </div>

        <div className="prices__card-container">
          <div className="prices__card">
            <ul className="prices__card-list">
              {pricesData.map((item, id) => {
                return (
                  <li className="prices__card-item" key={id}>
                    <span className="prices__item-content">
                      {item.styleName}
                    </span>
                    <div className="prices__card-separator"></div>
                    <span className="prices__item-content">{item.price}</span>
                  </li>
                );
              })}
            </ul>
            <PrimaryButton title={"Get Appointment"} />
          </div>

          <img
            src="./images/barber-banner.avif"
            alt="nosso barbeiro cortando cabelo"
            className="prices__img"
          />
        </div>

        <div className="prices__barber-stats">
          {stats.map((item, id) => {
            return (
              <div className="barber-stats__data" key={id}>
                <strong className="barber-stats__number">{item.number}</strong>
                <span className="barber-stats__legend">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
