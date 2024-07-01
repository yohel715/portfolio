"use client";

import React from "react";
import { Icon } from "@iconify/react";
import ContactForm from "../utils/ContactForm";

export default function contact() {
  return (
    <div className="contact mb-5">
      <h2 className="lightblue py-3 heading-large mb-5">Let&apos;s create something new!</h2>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h3>Text me</h3>
          <ContactForm />
        </div>
        <div className="col-md-4 col-sm-12 pt-5 pt-md-0 ps-md-5">
          <div className="d-flex flex-column">
            <h3>My social networks</h3>
            <a
              className="d-flex mt-3 mb-4 align-items-center"
              target="_blank"
              href="mailto:yohel715@gmail.com"
              rel="noopener noreferrer"
            >
              <Icon icon="dashicons:email-alt" width="32" height="32" />
              <h6 className="font-weight-regular mx-2 m-0">yohel715@gmail.com</h6>
            </a>
            <a
              className="d-flex mb-4 align-items-center"
              target="_blank"
              href="https://www.linkedin.com/in/yohelurenamora/"
              rel="noopener noreferrer"
            >
              <Icon icon="akar-icons:linkedin-fill" width="32" height="32" />
              <h6 className="font-weight-regular mx-2 m-0">Yohel Ureña Mora</h6>
            </a>
            <a
              className="d-flex mb-4 align-items-center"
              target="_blank"
              href="https://www.instagram.com/yohel.design/"
              rel="noopener noreferrer"
            >
              <Icon icon="ant-design:instagram" width="32" height="32" />
              <h6 className="font-weight-regular mx-2 m-0">yohel.design</h6>
            </a>
            <a
              className="d-flex mb-4 align-items-center"
              target="_blank"
              href="https://github.com/yohel715"
              rel="noopener noreferrer"
            >
              <Icon icon="ant-design:github" width="32" height="32" />
              <h6 className="font-weight-regular mx-2 m-0">yohel715</h6>
            </a>
            <a
              className="d-flex mb-4 align-items-center"
              target="_blank"
              href="https://wa.me/50670139624"
              rel="noopener noreferrer"
            >
              <Icon icon="simple-icons:whatsapp" width="32" height="32" />
              <h6 className="font-weight-regular mx-2 m-0">+506 7013 9624</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
