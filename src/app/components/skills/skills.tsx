/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Icon } from "@iconify/react";
import skillsData from "./skillsData.json";
import Image from "next/image";

export default function skill() {
  return (
    <div className="skills">
      <div className="row align-items-start">
        <div className="col-xl-7 col-lg-12">
          <h2 className="text-center mb-4 heading-large">
            Software Development
          </h2>
          <p>
            Management of different programming languages such as Java,
            Javascript, PHP. In addition, the use of different frameworks such
            as Android Studio, React, Laravel, Bootstrap, and SASS. And the
            platform Expo for making universal native apps for Android, iOS.
          </p>
          <p>
            Besides, the uses of CMS including WordPress and Drupal tools for
            control version with GitHub and dependency manager such as Composer,
            NPM, and Node.js.
          </p>
          <div className="skills__wrapper d-flex flex-wrap justify-content-center mx-3">
            {skillsData.softwareDevelopment.map((skill) => (
              <div key={skill.id} className="skills__wrapper__item">
                {skill.icon ? (
                  <Icon icon={skill.icon} width="32" height="32" />
                ) : (
                  skill.src && (
                    <div className="image-wrapper">
                      <img src={skill.src} alt={skill.name}/>
                    </div>
                  )
                )}
                <p className="font-weight-bold mt-3">{skill.name}</p>
                <p className="small font-weight-light">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-xl-5 col-lg-12">
          <h2 className="text-center mb-4 heading-large">
            Design &amp; Multimedia
          </h2>
          <p>
            Elaboration and vector elements, various components of motion
            graphics, as well as making of visual material and wireframes for
            web development and prototyping.
          </p>
          <p>
            In addition, constructions of visual identity as branding with
            elements such as logos, business cards, thematic flyers, and
            mockups. Mainly focused on the elaborations of brand guidelines.
          </p>
          <div className="skills__wrapper d-flex flex-wrap justify-content-center mx-3">
            {skillsData.designMultimedia.map((skill) => (
              <div key={skill.id} className="skills__wrapper__item">
                <Icon icon={skill.icon} width="32" height="32" />
                <p className="font-weight-bold mt-3">{skill.name}</p>
                <p className="small font-weight-light">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
