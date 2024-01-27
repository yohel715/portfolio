"use client";

import React from "react";
import { Icon } from "@iconify/react";
import ContactForm from "../utils/ContactForm";

export default function contact() {
  return (
    <div className="contact">
      <h2 className="lightblue py-3">Let&apos;s create something new!</h2>
      <div className="row">
        <div className="col-md-9 col-sm-12">
          <h3>Text me</h3>
          <ContactForm />
        </div>
        <div className="col-md-3 col-sm-12 pt-5 pt-md-0">
          <div>
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
              href="https://github.com/yohel715"
              rel="noopener noreferrer"
            >
              <Icon icon="ant-design:github" width="32" height="32" />
              <h6 className="font-weight-regular mx-2 m-0">yohel715</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
