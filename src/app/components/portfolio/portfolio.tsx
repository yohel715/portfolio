import React, { useEffect, useRef } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Masonry from 'masonry-layout/dist/masonry.pkgd.min.js';

export default function Portfolio() {
  const masonryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (masonryRef.current) {
      new Masonry(masonryRef.current, {
        itemSelector: '.grid-item',
        columnWidth: 200,
      });
    }
  }, []);

  return (
    <div>
      <h2 className="lightblue heading-large">Portfolio</h2>
      <div className="grid" ref={masonryRef}>
        <div className="grid-item">
          <Card data-bs-theme="dark">
            <Card.Img variant="top" src="https://placehold.co/1080"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
