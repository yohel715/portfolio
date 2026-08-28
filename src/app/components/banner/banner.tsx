"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../../images/png/profile.png";
import map from "../../images/svg/map.svg";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";
import { Icon } from "@iconify/react";

export default function banner() {
  const pdfUrl = "cv-yohel-domingo-urena-mora.pdf";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const downloadFile = () => {
    // Construct an absolute URL for the PDF file
    const absolutePdfUrl = new URL(pdfUrl, window.location.origin).toString();

    // Fetch the PDF file
    fetch(absolutePdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Use file-saver to save the blob as a file
        saveAs(blob, "cv-yohel-domingo-urena-mora.pdf");
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  const contacs = [
    {
      icon: "simple-icons:linkedin",
      url: "https://www.linkedin.com/in/yohelurenamora/",
    },
    {
      icon: "simple-icons:github",
      url: "https://github.com/yohel715",
    },
    {
      icon: "simple-icons:maildotru",
      url: "mailto:yohel715@gmail.com",
    },
    {
      icon: "simple-icons:drupal",
      url: "https://www.drupal.org/u/yurena",
    },
  ];

  return (
    <div id="about">
      <div className="banner pb-5">
        <div className="container pt-5">
          <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="pe-md-5">
              <span>Hi! I’m</span>
              <h1>Yohel Ureña Mora</h1>
              <h2 className="h2 w-md-75">
                Technical Account Manager
              </h2>
              <h3 className="h4 w-md-75 mt-3 subtitle">
                Formerly Full Stack Developer and UX Designer
              </h3>
              <Button
                type="button"
                className="my-3"
                variant="light"
                onClick={downloadFile}
              >
                <Icon
                  icon="akar-icons:download"
                  width="20"
                  height="20"
                  className="me-2"
                />
                Download my curriculum
              </Button>
              <div className="d-flex justify-content-evenly justify-content-lg-start mt-3 contact-links">
                {contacs.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none me-md-5"
                    aria-label={contact.icon.split(":")[1]}
                  >
                    <Icon icon={contact.icon} width="32" height="32" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <Image
                src={profilePic}
                height={400}
                alt="Picture of the author"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="px-lg-5 py-lg-3">
          <div className=" row d-flex align-items-center  flex-sm-row-reverse my-3 p-md-0 p-4">
            <div className="col-md-8 col-sm-12">
              <h2 className="mb-3 lightblue text-center-sm">
                I’m from Costa Rica!
              </h2>
              <p>
                On July 15th, 2000, I was born in Puntarenas. I was raised and
                have lived in Orotina, a district of Alajuela, since childhood.
                When I was a child, I developed an incredible love for
                technology and science. This event encouraged me to become a
                developer and designer.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
              <Image
                className="p-lg-0 p-3"
                src={map}
                height={250}
                alt="map"
                priority={true}
              />
            </div>
          </div>
        </div>

        <div className="px-lg-5 py-lg-3 justify-content-center">
          <div className="row d-flex align-items-center  p-md-0 p-4">
            <div className="col-md-4 col-sm-12">
              <h2 className="lightblue mx-3 text-center">About my Knowledge</h2>
            </div>
            <div className="col-md-8 col-sm-12">
              <p>
                In 2018, I started my specialization in Computer Science and
                Multimedia Technology at the University of Costa Rica (UCR).
              </p>
              <p>
                In 2021, I completed my bachelor&apos;s degree, and I am
                currently finishing my master&apos;s degree.
              </p>
            </div>
          </div>
        </div>

        <div className="px-lg-5 py-lg-3 justify-content-center">
          <div className="row d-flex align-items-center p-md-0 p-4">
            <div className="col-md-4 col-sm-12">
              <h2 className="px-3 lightblue text-center">
                About my hobbies & Passions
              </h2>
            </div>
            <div className="col-md-8 col-sm-12">
              <p>
                Passionate about all UX and UI trends, usability, and
                accessibility, I am a Full Stack Developer, primarily focused on
                Frontend development. I have been involved in various projects
                using technologies such as React, JavaScript, Typescript, PHP,
                and jQuery. Giving me hand-code experience in hybrid mobile and
                web development
              </p>
              <p>
                Additionally, I excel in crafting vector elements, wireframes
                and prototyping, ensuring a seamless integration of design and
                development for optimal user engagement applying usability and
                accessibility principles.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center py-5">
          <p>
            <i>
              I enjoy creating great looking digital products, focusing on
              performance, and good user experience as well.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}
