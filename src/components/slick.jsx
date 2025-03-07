import React, { Component } from "react";
import Slider from "react-slick";

function Slick() {

    let mobilephones=[
        {
            
              model: "OnePlus 11",
              image:
                "https://images.priceoye.pk/oneplus-10-ultra-pakistan-priceoye-mgl6q-500x500.webp",
              chip: "Snapdragon 8 Gen 2",
              mainCamera: "50MP triple camera",
              display: "6.7-inch AMOLED",
              ram: "16GB RAM",
              battery: "5000mAh battery",
              protection: "Corning Gorilla Glass Victus",
              security: "In-display Fingerprint Scanner",
              os: "Android 13, OxygenOS",
              connectivity: "5G capable",
        },
        {
              model: "OnePlus 10 Pro",
              image:
                "https://images.priceoye.pk/oneplus-10r-pakistan-priceoye-p8k70-500x500.webp",
              chip: "Snapdragon 8 Gen 1",
              mainCamera: "48MP triple camera",
              display: "6.7-inch Fluid AMOLED",
              ram: "12GB RAM",
              battery: "5000mAh battery",
              protection: "Corning Gorilla Glass",
              security: "Fingerprint sensor",
              os: "Android 12, OxygenOS",
              connectivity: "5G capable",
            },
            {
              model: "OnePlus Nord 200",
              image:
                "https://images.priceoye.pk/oneplus-nord-n200-5g-pakistan-priceoye-e3shf-500x500.webp",
              chip: "MediaTek Dimensity 1200",
              mainCamera: "50MP dual camera",
              display: "6.43-inch AMOLED",
              ram: "8GB RAM",
              battery: "4500mAh battery",
              protection: "Corning Gorilla Glass",
              security: "Fingerprint sensor",
              os: "Android 11, OxygenOS",
              connectivity: "5G capable",
            },
            {
              model: "OnePlus 9 Pro",
              image:
                "https://images.priceoye.pk/oneplus-9rt-pakistan-priceoye-t13lk-500x500.webp",
              chip: "Snapdragon 888",
              mainCamera: "48MP quad camera",
              display: "6.7-inch Fluid AMOLED",
              ram: "12GB RAM",
              battery: "4500mAh battery",
              protection: "Corning Gorilla Glass",
              security: "Fingerprint sensor",
              os: "Android 11, OxygenOS",
              connectivity: "5G capable",
            },
            {
              model: "OnePlus 8T",
              image:
                "https://images.priceoye.pk/oneplus-8t-pakistan-priceoye-fumi1.jpg",
              chip: "Snapdragon 865",
              mainCamera: "48MP quad camera",
              display: "6.55-inch Fluid AMOLED",
              ram: "12GB RAM",
              battery: "4500mAh battery",
              protection: "Corning Gorilla Glass",
              security: "Fingerprint sensor",
              os: "Android 10, OxygenOS",
              connectivity: "5G capable",
            }
        ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container">
      <Slider {...settings}>
       {mobilephones.map((val)=>
       <div className="d-flex flex-column align-items-center">
        <img style={{width:100}} src={val.image} alt="" />
        <h6>{val.model}</h6>
       </div>
       )
       
       }
      </Slider>
    </div>
  );
}

export default Slick;

