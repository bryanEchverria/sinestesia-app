import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const CarouselComponent = () => {
  return (
    <>
    <Carousel variant="" className="carousel">
      
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src='https://res.cloudinary.com/dlg0ke5dy/image/upload/v1674445928/sinestesia/NP-eCommerce-marketplaces-mundo-franquicia-franquicias_azp4xr.webp'
          alt="First slide"
        />
        <Carousel.Caption >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dlg0ke5dy/image/upload/v1674445928/sinestesia/csm_e-commerce_7e23a5867b_xeeir8.jpg"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    
    </>
  )
}

export default CarouselComponent