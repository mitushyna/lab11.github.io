import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TulipYelImg from '../assets/2.jpeg';
import TulipImg from '../assets/8.jpeg';
import RoseImg from '../assets/9.jpeg';
import PurplImg from '../assets/10.jpeg';
import WhiteImg from '../assets/5.jpeg';



export default class CarouselBox extends Component{
    render(){
        return(
          <Carousel>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={TulipYelImg}
                  alt="Tulip"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={TulipImg}
                  alt="Tulip"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={RoseImg}
                  alt="Rose"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={PurplImg}
                  alt="Flowers"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={WhiteImg}
                  alt="Flowers"
                  />
              </Carousel.Item>
          </Carousel>
        )
    }
}