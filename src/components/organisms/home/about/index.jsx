import { about } from "@/constants/about";
import React from "react";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__img-container">
        <div className="about__since-detail">
          <span className="since-detail__year">
            <em>{about[0].year}</em> <br /> {about[0].sinceYear}
          </span>
        </div>
        <img
          src={about[0].imageSrc}
          alt={about[0].imageAlt}
          className="about__img"
        />
      </div>

      <div className="about__details">
        <span className="tag">{about[0].content.tag}</span>
        <h2 className="section__heading about__details-title">
          {about[0].content.title}
        </h2>
        <p className="about__details-paragraph">
          {about[0].content.paragraphs}
        </p>
      </div>
    </section>
  );
};
