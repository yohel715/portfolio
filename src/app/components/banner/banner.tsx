"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../../images/png/profile.png";
import PdfViewer from "../utils/PdfViewer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { saveAs } from "file-saver";

export default function banner() {
  const pdfUrl = "curriculum.pdf";

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
        saveAs(blob, "curriculum.pdf");
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <div className="banner pb-5" id="banner">
      <div className="container pt-5">
        <div className="wrapper d-flex align-items-center justify-content-center">
          <div className="pe-md-5">
            <span>Hi! I’m</span>
            <h1>Yohel Ureña Mora</h1>
            <p className="h2">
              Frontend Developer and UX Designer
            </p >
            <Button
              type="button"
              className="mt-3"
              variant="outline-primary"
              onClick={handleShow}
            >
              Check my curriculum
            </Button>
          </div>
          <div>
            <Image src={profilePic} height={400} alt="Picture of the author" />
          </div>
        </div>
      </div>

      <Modal
        dialogClassName="custom-modal"
        show={show}
        size="xl"
        onHide={handleClose}
        data-bs-theme="dark"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Curriculum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PdfViewer pdfUrl={pdfUrl} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="font-weight-bold px-5"
            onClick={downloadFile}
          >
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
