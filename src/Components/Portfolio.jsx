/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/code.jpg";

const imageAltText = "Man holding code sticky notes";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Soul Connect (Full Stack MERN)",
    description:
      "A matrimony site where users can create accounts, submit biodata, request premium access, and more. Features include separate dashboards for admin and users with Stripe Payment Gateway for premium requests.",
    url: "https://soul-connect-bysam.web.app/",
  },
  {
    title: "Tour Savvy (Full Stack MERN)",
    description:
      "A Tour Management Application where tourists can view places, add locations and reviews, and manage tours.",
    url: "https://toursavvy-bysam.web.app/",
  },
  {
    title: "North Studio (Front End Next.js)",
    description:
      "An architecture firm showcase website that presents company profiles and visual representation of services.",
    url: "https://northstudiobd.com/",
  },
  {
    title: "Restaurant Management System (Front End)",
    description:
      "A restaurant management application where guests can view and order food, including custom favorites and secure authentication.",
    url: "https://flavor-fusion-bysam.web.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
