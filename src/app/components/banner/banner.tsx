"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../../images/png/profile.png";
import PdfViewer from "../utils/PdfViewer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { saveAs } from "file-saver";
import { Icon } from "@iconify/react";

export default function banner() {
  const pdfUrl = "cv-yohel-domingo-urena-mora.pdf";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      icon: "simple-icons:whatsapp",
      url: "https://wa.me/50670139624",
    },
    {
      icon: "simple-icons:drupal",
      url: "https://www.drupal.org/u/yurena",
    },
  ];

  return (
    <div className="banner pb-5" id="banner">
      <div className="container pt-5">
        <div className="wrapper d-flex align-items-center justify-content-center">
          <div className="pe-md-5">
            <span>Hi! I’m</span>
            <h1>Yohel Ureña Mora</h1>
            <h2 className="h2 w-md-75">Full Stack Developer and UX Designer</h2>
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
            <div className="d-flex justify-content-center justify-content-lg-start mt-3 contact-links">
              {contacs.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none me-3"
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

      <Modal
        dialogClassName="custom-modal"
        show={show}
        size="lg"
        onHide={handleClose}
        data-bs-theme="dark"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Curriculum</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-auto">
          <PdfViewer pdfUrl={pdfUrl} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="font-weight-bold px-4"
            onClick={downloadFile}
          >
            <Icon
              icon="akar-icons:download"
              width="20"
              height="20"
              className="me-2"
            />
            Download
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
