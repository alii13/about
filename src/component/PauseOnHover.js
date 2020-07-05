import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

export default class PauseOnHover extends Component {
  

  render() {
    const time =this.props.time;
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: time,
      pauseOnHover: true,
      focusOnSelect:false,
      adaptiveHeight: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="">
        
        <Slider {...settings}>
          <div>
            <Card  name="Clifton Nienow" image={this.props.one} description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor"/>
          </div>
          <div>
           <Card name="Wilber Ward" image="Wilber" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor"/>
          </div>
          <div>
          <Card name="Rory Runtey" image="nelson" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor"/>
          </div>
          <div>
          <Card name="Nelson Simes" image="Ellipse" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor"/>
          </div>
          <div>
          <Card name="Wilber Ward" image="Wilber" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor"/>
          </div>
        </Slider>
      </div>
    );
  }
}