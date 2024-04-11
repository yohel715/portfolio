import React from "react";
import { Icon } from "@iconify/react";

export default function experience() {
  return (
    <div className="experience">
      <h2 className="lightblue heading-large">Experience</h2>
      <p>
        My experience working as a software developer and other roles since
        2019.
      </p>

      <div className="row pt-2">
        <div className="col-2 left">
          <div className="d-flex justify-content-end">
            <p className="small lightblue fw-light">2021 & Present</p>
          </div>
        </div>
        <div className="col-10 right">
          <div className="d-flex justify-content-center flex-column">
            <h3>Frontend Web Developer at ParallelDevs</h3>
            <p>
              I worked on several development projects, showcasing my
              proficiency in Drupal, WordPress, and other headless sites with
              frameworks like React, Gatsby, Astro, and others using CMS like
              Drupal or Contentfull consulted through GraphQL. My expertise
              extends to applying the Atomic Design Methodology by implementing
              the Emulsify framework to generate reusable frontend components
              for custom theming. Additionally, I worked on other site-building
              functionalities, including building custom modules, content types,
              views, blocks, SEO optimization, forms, and more.
            </p>
            <p>Some of my achievements include:</p>
            <ul>
              <li>Developments in limited times.</li>
              <li>Active participation in the Drupal community, and module maintenance.</li>
              <li>Joint development with people from different countries like USA, Canada, and Bangladesh.</li>
              <li>High performance in development as well as interface.</li>
              <li>Gave talks at the Drupal Camp Costa Rica 2022 and 2023.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2 left">
          <div className="d-flex justify-content-end">
            <p className="small lightblue fw-light">2020 & 2021</p>
          </div>
        </div>
        <div className="col-10 right">
          <div className="d-flex justify-content-center flex-column">
            <h3>
              Assistant hours at the Luis Ferrero Acosta Library of the UCR
            </h3>
            <p>
              In this part-time job I updated and managed the library&apos;s
              website and database, also managed the library&apos;s social
              networks, created posters and other graphic identity elements to
              promote academic activities or celebrate holidays, worked as part
              of a team to organize activities in the library.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2 left">
          <div className="d-flex justify-content-end">
            <p className="small lightblue fw-light">2019</p>
          </div>
        </div>
        <div className="col-10 right">
          <div className="d-flex justify-content-center flex-column">
            <h3>Assistant hours at Acción Social Department of the UCR</h3>
            <p>
              In this part-time job I worked as an assistant providing help and
              support in different socio-cultural activities that involved
              people from the community, and people in situations of poverty or
              social risk, I managed the office and organized several files to
              keep control and inventories.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2 left">
          <div className="d-flex justify-content-end">
            <p className="small lightblue fw-light">2019</p>
          </div>
        </div>
        <div className="col-10 right">
          <div className="d-flex justify-content-center flex-column">
            <h3>InterGameDev & Desing at Ingeniust</h3>
            <p>
              In this part-time job I worked in design and prototyping of menu
              interface for videogames developed with Unity
              <Icon icon="mdi:unity" width="24" height="24" />. My main role was
              to design and develop the interface in Unity, and to create the
              assets for the game.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}
