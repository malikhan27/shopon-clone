import Carouselcompo from './components/carousels';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cardcompo from './components/cards';
import logo from "./logo.svg"
import Slick from './components/slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';


function App() {

  let categories=[
  { id:"01",
    name:"GIFT CARD",
    image:'https://shopon.pk/images/images/gift-card.png?1700821419075',
    items:[
      {
        name:"GIFT CARD 1",
        image:"https://shopon.pk/images/thumbnails/270/270/detailed/161/88b4924f-8d78-4379-9229-359e563ad1b9_pqyk-j8.jpg",
        id:"11",
        price:"Rs: 4000",

      },
      {
        name:"GIFT CARD 2",
        image:"https://shopon.pk/images/thumbnails/270/270/detailed/161/88b4924f-8d78-4379-9229-359e563ad1b9_pqyk-j8.jpg",
        id:"12",
        price:"Rs: 5000",

      },
      {
        name:"GIFT CARD 3",
        image:"https://shopon.pk/images/thumbnails/270/270/detailed/161/88b4924f-8d78-4379-9229-359e563ad1b9_pqyk-j8.jpg",
        id:"13",
        price:"Rs: 5500",
      },
      {
        name:"GIFT CARD 4",
        image:"https://shopon.pk/images/thumbnails/270/270/detailed/161/88b4924f-8d78-4379-9229-359e563ad1b9_pqyk-j8.jpg",
        id:"14",
        price:"Rs: 5500",
      },
    ]

      
       
  },
  {id:"02",
    name:"FASHION",
    image:'https://shopon.pk/images/images/fashion.png?1700821697408',
    items:[
      {
        name:"WOMEN LAWN SUIT",
        image:"	https://gulattire.com/cdn/shop/products/616464431_800x.jpg?v=1652360821",
        id:"15",
        price:"Rs: 2500",

      },{
        name:"MENS HOODIE",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSypz_vKUlzd_NId0P9BbFTik5sdhlQ4qAqFqHKsljw&s",
        id:"16",
        price:"Rs: 3000",

      },{
        name:"CAPS",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWCKFXx7xwLm6ibOeKq4NKezpP3fwLlRmVN4VZEVlNQ&s",
        id:"17",
        price:"Rs: 1000",

      } 
      ,{
        name:"SHAWL",
        image:"",
        id:"18",
        price:"Rs: 1000",

      }  ]
       
      },
      {id:"03",
        name:"ELECTRONICS",
        image:'https://shopon.pk/images/images/mobile-%26-tablets.png?1700821816773',
        items:[
          {
            name:"SAMSUNG GALAXY",
            image:"",
            id:"19",
            price:"Rs: 30000",
    
          },{
            name:"JUICER BLENDER",
            image:"",
            id:"20",
            price:"Rs: 10000",
    
          },{
            name:"IRON",
            image:"",
            id:"21",
            price:"Rs: 5000",
    
          },
          {
            name:"IRON",
            image:"",
            id:"22",
            price:"Rs: 5000",
    
          }
        ]
       
      },
      {id:"04",
        name:"HOME DECORE",
        image:'https://shopon.pk/images/images/home-decor-item.png?1700821738843',
        items:[
          {
            name:"FLOOR MATT",
            image:"",
            id:"23",
            price:"Rs: 460",
    
          },{
            name:"PRAYER MATT",
            image:"",
            id:"24",
            price:"Rs: 1000",
    
          },{
            name:"LIGHT SHADES",
            image:"",
            id:"25",
            price:"Rs: 2500",
    
          },
          {
            name:"LIGHT SHADES",
            image:"",
            id:"26",
            price:"Rs: 2500",
    
          },
          
        ]
       
      }
  ]

  const [currentcategory,setnewcategory]= useState(categories[0])

  return (
    

   <>
   <Container fluid>
    <div className='d-flex justify-content-between'>
    <div className='mt-2 fw-bold'> <Navbar.Brand href="#"><img style={{width:150}} src='https://shopon.pk/images/logos/9/Shopon_Logo_F-03__1__3n3z-fn.png' alt='logo'></img></Navbar.Brand></div>
     <Navbar expand="lg" >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
       <div className='d-none d-lg-block mt-2'><Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </div>
    </div>
    </Container>


<Container fluid>
<Carouselcompo img1={ "https://shopon.pk/images/promo/249/xbox_Gift_cards__2_.png"} img2={logo} img3={"https://shopon.pk/images/promo/222/Solar_componenets.png"} />
</Container>
   
 <Row className='g-4 text-center mt-4'>
      <h1 className='my-3'>OUR CATEGORIES</h1>
    {categories.map((val,ind)=>
    
    <Col style={{}} onClick={()=> setnewcategory(val)} key={val.id} xs={12} sm={6} lg={3} className='d-flex justify-content-center'>
    <Cardcompo  cardimg={val.image} cardname={val.name} />
    </Col>
    
    )
    
    
    }
  </Row>

  <Row className='g-4 text-center mt-4'>
    {currentcategory && (
      <>
      <h3>PRODUCTS IN {currentcategory.name}</h3>
      {currentcategory.items.map((val,ind)=>
       <Col key={ind}  xs={12} sm={6} lg={6} className='d-flex justify-content-center'>
       <Cardcompo cardname={val.name} cardimg={val.image} price={val.price} />
       </Col>
      )}
     
      </>
    )}
  
  </Row>






<Container className='mt-5 text-center'>
  <h3 className='mb-5'>FLASH SALE</h3>
  <Slick objectofitems={categories} />
</Container>

   </>
  );
}

export default App;
