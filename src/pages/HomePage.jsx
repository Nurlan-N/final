import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

export const HomePage = () => {
  return (
    <div className="container my-5">
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src='https://www.comingsoon.net/wp-content/uploads/sites/3/2022/06/Baby-Groot.jpeg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="http://4kwallpapers.com/images/walls/thumbs_2t/8536.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.alphacoders.com/126/1267372.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
