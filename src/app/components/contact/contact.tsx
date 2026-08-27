"use client";

import React from "react";
import { Icon } from "@iconify/react";
import ContactForm from "../utils/ContactForm";

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
    },
    {
      text: "+506 7013 9624",
      href: "https://wa.me/50670139624",
      icon: "simple-icons:whatsapp",
    },
  ];

  return (
    <div className="contact mb-5">
      <h2 className="lightblue py-3 heading-large mb-5">
        Let&apos;s create something new!
      </h2>
      <div className="d-flex flex-column flex-lg-row justify-content-between">
          {links.map((item, index) => (
          <a
            key={index}
            className="d-flex align-items-center"
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
  );
}
