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
            <h3 className="lightblue">Full Stack Developer at ParallelDevs</h3>
            <p>
              Team Lead with expertise in Drupal and Decoupled Drupal projects,
              utilizing React-based frameworks like Next.js, Angular, Gatsby,
              Astro, and Remix, and consuming APIs via GraphQL and Axios.
              Skilled in data modeling with MySQL and committed to best
              practices in SEO, usability, and accessibility (WCAG 2.2). Proven
              ability to build complex websites and mobile apps through custom
              frontend and backend integration. As a designer, I create
              functional prototypes in Figma, ensuring optimal user experience.
              Authored documentation, code standards, and guidelines for
              developers. Key responsibilities include code reviews, mentoring
              junior developers, and active participation in the Drupal
              community, including module maintenance.
            </p>
            <p>Some of my achievements include:</p>
            <ul>
              <li>Developments in limited times.</li>
              <li>
                Active participation in the Drupal community, and module
                maintenance.
              </li>
              <li>
                Joint development with people from different countries like U.S and
                Canada.
              </li>
              <li>High performance in development as well as interface.</li>
              <li>
                Gave tech talks to colleagues and at the Drupal Camp CR 2022 &
                2023.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2 left">
          <div className="d-flex justify-content-end">
            <p className="small lightblue fw-light">2021 - 2022</p>
          </div>
        </div>
        <div className="col-10 right">
          <div className="d-flex justify-content-center flex-column">
            <h3 className="lightblue">Frontend Developer at ParallelDevs</h3>
            <p>
              Developed and built websites using Drupal, Contentful, and
              WordPress. Led the customization and creation of Drupal themes,
              utilizing blocks, views, taxonomies, and both contributed and
              custom modules. Applied atomic design methodology to create
              reusable components and design complex interface systems for
              scalable and efficient web development.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2 left">
          <div className="d-flex justify-content-end">
            <p className="small lightblue fw-light">2019 - 2021</p>
          </div>
        </div>
        <div className="col-10 right">
          <div className="d-flex justify-content-center flex-column">
            <h3 className="lightblue">
              Assistant at University of Costa Rica (UCR)
            </h3>
            <p>
              I updated and managed the library&apos;s website and database,
              also managed the library&apos;s social networks, created posters
              and other graphic identity elements to promote academic
              activities. I organized campaigns in the UCR providing help and
              support in different socio-cultural activities that involved
              people from the community, and people in situations of poverty or
              social risk. I managed the office and organized several documents
              to keep control and inventories.
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
            <h3 className="lightblue">InterGameDev & Desing at Ingeniust</h3>
            <p>
              I developed content and graphic material for social networks.
              Design and prototyping of User Interface (UI) and User Experience
              (UX) for projects developed in Unity{" "}
              <Icon icon="mdi:unity" width="18" height="18" />, I setup graphic
              material for printing and identifiers for third parties generating
              brand identity and visual identifier for several companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
