import Image from "next/image";
import map from "../../images/svg/map.svg";

export default function about() {
  return (
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
              When I was a child, I developed an incredible love for technology
              and science. This event encouraged me to become a developer and
              designer.
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
              In 2021, I completed my bachelor&apos;s degree, and I am currently
              finishing my master&apos;s degree.
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
              using technologies such as React, JavaScript, Typescript, PHP, and
              jQuery. Giving me hand-code experience in hybrid mobile and web
              development
            </p>
            <p>
              Additionally, I excel in crafting vector elements, wireframes and
              prototyping, ensuring a seamless integration of design and
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
  );
}
