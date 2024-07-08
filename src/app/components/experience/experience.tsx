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
            Development projects that showcase my expertise in Drupal, React and React Native. I apply the principles of atomic design methodology, generating reusable components and developing decoupled sites with React-based frameworks such as NextJS, Angular, Gatsby, Astro and Remix consuming APIs using GraphQL and HTTP request methods. I also have experience in data modeling management with  databases RDBMS in MySQL and a strong commitment to excellent practices in SEO, usability and accessibility.
            </p>
            <p>
              My expertise extends to generate reusable components for custom
              theming and consume backend services. Additionally, I generate
              documentation, code standardization, guidelines and how to articles
              for other developers.
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
              <li>Gave tech talks to colleagues and at the Drupal Camp CR 2022 & 2023.</li>
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
            I worked in frontend development generating and building websites in Drupal, ContentFull and WordPress. I actively participated in the suite building and customization of Drupal themas and the configuration of blocks, views, taxonomies and modules.
            Developed projects in React using different Node.JS libraries.
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
