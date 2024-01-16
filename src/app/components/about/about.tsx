"use client";

import { useState } from 'react';
import Image from "next/image";
import profilePic from "../../images/png/profile.png";
import PdfViewer from "../PdfViewer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function about() {
  const pdfUrl = "curriculum.pdf";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fullscreen, setFullscreen] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="about pt-5" id="about">
      <div className="container pt-5">
        <div className="wrapper d-flex align-items-center justify-content-center">
          <div className="pe-md-5">
            <span>Hi! I’m</span>
            <h1>Yohel Ureña Mora</h1>
            <h2>Developer and UX Designer</h2>
            <Button
              type="button"
              className='mt-3'
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

      <Modal dialogClassName="custom-modal" show={show} fullscreen={fullscreen ? true : undefined} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header closeButton />
        <Modal.Body>
          <PdfViewer pdfUrl={pdfUrl} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
