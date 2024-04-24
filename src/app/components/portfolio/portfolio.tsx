import React from 'react';
import Card from "react-bootstrap/Card";
import Masonry from 'react-masonry-css';
import portfolioData from "./portfolioData.json";
import { Icon } from "@iconify/react";

export default function Portfolio() {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    600: 1
  };

  return (
    <div>
      <h2 className="lightblue heading-large">Portfolio</h2>
      <p>This is a collection of my work. I am always looking for new projects to work on.</p>
      <p>If you have a project you would like to discuss, please get in touch.</p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column">
        {portfolioData.map((item, index) => (
          <React.Fragment key={index}>
            <Card data-bs-theme="dark" className='portfolio-card mb-4'>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <div className="d-flex flex-wrap">
                  {item.tags && item.tags.map((tag, index) => (
                    <p key={index} className="badge bg-secondary me-2">{tag}</p>
                  ))}
                </div>
                <Card.Title>
                  {item.title}
                </Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  {
                    item.links && (
                      item.links.map((link, index) => (
                      <Card.Link key={index} href={link.url} target="_blank" className='text-decoration-none me-2'>
                        {link.text}
                      </Card.Link>
                    )))
                  }
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="text-body-secondary fs-6 fw-lighter">Technologies used</p>
                <div className="d-flex flex-wrap">
                  {item.tags && item.technologies.map((icon , index) => (
                    <Icon key={index} icon={icon} width="24" height="24" className="me-3"/>
                  ))}
                </div>
              </Card.Footer>
            </Card>
          </React.Fragment>
        ))}
      </Masonry>
    </div>
  )
}
