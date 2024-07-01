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
              I worked on several development projects, showcasing my
              proficiency in Drupal{" "}
              <Icon icon="simple-icons:drupal" width="18" height="18" />,
              WordPress{" "}
              <Icon icon="ic:baseline-wordpress" width="18" height="18" />, and
              other decoupled sites with frameworks like React{" "}
              <Icon icon="mdi:react" width="18" height="18" />, Gatsby{" "}
              <Icon icon="mdi:gatsby" width="18" height="18" />, Astro{" "}
              <Icon icon="mdi:gatsby" width="18" height="18" />, and others
              using CMS like Drupal{" "}
              <Icon icon="simple-icons:drupal" width="18" height="18" /> or
              Contentfull{" "}
              <Icon icon="simple-icons:contentful" width="18" height="18" />{" "}
              consulted through GraphQL{" "}
              <Icon icon="mdi:graphql" width="18" height="18" />. My expertise
              extends to applying the Atomic Design Methodology by implementing
              the Emulsify framework to generate reusable components for custom
              theming. Additionally, I worked on other site-building
              functionalities, including building custom modules, content types,
              views, blocks, SEO optimization, forms, and more.
            </p>
            <p>Some of my achievements include:</p>
            <ul>
              <li>Developments in limited times.</li>
              <li>
                Active participation in the Drupal community, and module
                maintenance.
              </li>
              <li>
                Joint development with people from different countries like USA,
                Canada, and Bangladesh.
              </li>
              <li>High performance in development as well as interface.</li>
              <li>Gave talks at the Drupal Camp Costa Rica 2022 and 2023.</li>
            </ul>
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
            <h3 className="lightblue">Assistant at University of Costa Rica (UCR)</h3>
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
