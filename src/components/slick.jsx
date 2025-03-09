
import Slider from "react-slick";

function Slick({objectofitems}) {

    
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
       {objectofitems.map((val)=>
         val.items.map((items,index)=>
          <div className="d-flex flex-column align-items-center">
       <img style={{width:100}} src={items.image} alt="" />
       <h6>{items.name}</h6>
      </div>
         
       ))
       
       }
      </Slider>
    </div>
  );
}

export default Slick;

