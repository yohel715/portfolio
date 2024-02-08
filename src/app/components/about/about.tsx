import "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import map from "../../images/svg/map.svg";

export default function about() {
  return (
    <div className="about">
      <Card data-bs-theme="dark" className="px-lg-5 py-lg-3">
        <div className="row d-flex align-items-center flex-sm-row-reverse my-3  p-md-0 p-4">
          <div className="col-md-8 col-sm-12">
            <h2 className="mb-3 lightblue text-center-sm">I’m from Costa Rica!</h2>
            <p>
              On July 15th, 2000, I was born in Puntarenas. I was raised and
              have lived in Orotina, a district of Alajuela, since childhood.
              When I was a child, I developed an incredible love for technology
              and science. This event encouraged me to become a developer and
              designer.
            </p>
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center">
            <Image className="p-lg-0 p-3" src={map} height={250} alt="map" priority={true} />
          </div>
        </div>
      </Card>

      <Card
        data-bs-theme="dark"
        className="px-lg-5 py-lg-3 justify-content-center"
      >
        <div className="row d-flex align-items-center  p-md-0 p-4">
          <div className="col-md-4 col-sm-12">
            <h2 className="lightblue mx-3 text-center">About my Knowledge</h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <p>
              I am a postgraduate from a bilingual high school. Later on, I
              started my higher education in graphic design.
            </p>
            <p>
              Since 2018, I have been majoring in Informática y Tecnología
              Multimedia in the University of Costa Rica (UCR).
            </p>
          </div>
        </div>
      </Card>

      <Card
        data-bs-theme="dark"
        className="px-lg-5 py-lg-3 justify-content-center"
      >
        <div className="row d-flex align-items-center p-md-0 p-4">
          <div className="col-md-4 col-sm-12">
            <h2 className="px-3 lightblue text-center">
              About my hobbies & Passions
            </h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <p>
              I am genuinely passionate about problem-solving, creating
              attractive designs, and always learning new things every day.
            </p>
            <p>
              Since childhood, I have enjoyed challenges that test my ingenuity;
              in fact, I love Rubik’s Cubes and puzzles overall.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
