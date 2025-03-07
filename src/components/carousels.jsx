
import Carousel from 'react-bootstrap/Carousel';


function Carouselcompo({img1,img2,img3}) {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={img1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={img2} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselcompo;