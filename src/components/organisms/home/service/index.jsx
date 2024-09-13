import { PrimaryButton } from "@/components/atoms/primary-button";
import { serviceData } from "@/constants/serviceData";
import React from "react";

export const Service = () => {
  return (
    <section id="services" className="services">
      <div className="services-hero">
        <span className="tag">Relaxing Atmosphere</span>
        <h3 className="section__heading services__title">
          Play soft background music
        </h3>
        <p className="services-hero__description">
          Schedule follow-up appointments and send reminders.Offer touch-up
          services for regular clients.
        </p>
        <PrimaryButton title={"Contact Us"} />
      </div>

      <div className="services-content">
        <ul className="services__list">
          {serviceData.map((item, id) => {
            return (
              <li className="services__item" key={id}>
                {item.icon}
                <h4 className="services__item-title">{item.title}</h4>
                <p className="services__item-description">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
