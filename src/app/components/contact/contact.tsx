"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function contact() {
  const links = [
    {
      text: "yohel715@gmail.com",
      href: "mailto:yohel715@gmail.com",
      icon: "dashicons:email-alt",
    },
    {
      text: "Yohel Ureña Mora",
      href: "https://www.linkedin.com/in/yohelurenamora/",
      icon: "akar-icons:linkedin-fill",
    },
    {
      text: "yohel.design",
      href: "https://www.instagram.com/yohel.design/",
      icon: "ant-design:instagram",
    },
    {
      text: "yohel715",
      href: "https://github.com/yohel715",
      icon: "ant-design:github",
    }
  ];

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="my-5 mb-5">
          <h2 className="lightblue py-4 heading-large">
          Let&apos;s create something new
          </h2>
          <p className="h4">Get it touch with me!</p>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-between">
            {links.map((item, index) => (
            <a
              key={index}
              className="d-flex align-items-center mb-5"
              target="_blank"
              href={item.href}
              rel="noopener noreferrer"
            >
              <Icon icon={item.icon} width="20" height="20" />
              <p className="h5 font-weight-regular mx-2 m-0">{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
