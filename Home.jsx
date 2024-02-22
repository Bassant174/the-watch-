import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import 'animate.css';
const Home = () => {
  return (
    <div> 
      <section className="bannar">
      <Container>
        <Row>
        <Col lg={7} md={7} sm={7} className="slideLeft">
           <h1> Select Your New Perfect Style </h1>
              <p> Ut erum ad mintm veruam. quts rwstrud exercitation ullamco nsi ut abqu•p ex
                ea commodo consequat is aute irure. </p>
              <HashLink to="/#Home"><a>SHOP NOW </a></HashLink>
            </Col>
            <Col lg={4} md={4} sm={4} className=" slideRight" >
              <img src="img/hero/watch.png" alt="" className="hom" />
             
          </Col>
        </Row>
      </Container>
      </section>


      <section className='banner2' > 
      <Container>
        <Row>
        <h2 className='hh'>New Products</h2>
        <div className='three' >
          <Col SM={12} md={4}>
            <div className='prod1' >
            <img src='img/gallery/new_product1.png' />
            </div>
          <div class="text">
                        <a href="#"><h3>Bassant Front end</h3> </a>
                        <p>$ 50.500</p>
                    </div>
          </Col>
          <Col SM={6} md={4} lg={4}>
            <div className='prod1' >
            <img src='img/gallery/new_product2.png' />
            </div>
          <div class="text">
                        <a href="#"><h3>Bassant Front end</h3> </a>
                        <p>$ 50.500</p>
                    </div>
          </Col>

          <Col SM={12} md={6} lg={4}>
            <div className='prod1' >
            <img src='img/gallery/new_product3.png ' />
            </div>
          <div class="text">
                        <a href="#"><h3>Bassant Front end</h3> </a>
                        <p>$ 50.500</p>
                    </div>
          </Col>
          </div>

        </Row>
      </Container>
      </section>

      

<section className='banner4'>
  <Container>
    <Row>
      <Col className='hed'>
        <h2>Popular Items</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnab <br />
                        aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      </Col>

      <div className='connt'>

        


      
        <Col  SM={12} md={6} lg={4} >
        <div class="box">
       <div className='watch'>
        <img src=' img/gallery/popular1.png'/>
        
        <a href="#">Add to Cart</a>
        </div> 

        <div className='txt' >
        <h3><a href="#">Thermo Ball Etip Gloves</a></h3>
                        <p>$ 45,743</p>
          
        </div>
       
        </div> </Col> 


        
        <Col SM={12} md={6} lg={4} >
        <div class="box">  <div className='watch'>
        <img src=' img/gallery/popular2.png'/>
        
        <a href="#">Add to Cart</a>
         </div>
        <div className='txt' >
        <h3><a href="#">Thermo Ball Etip Gloves</a></h3>
            
                     <p>$ 45,743</p>
      
        </div>
        
        </div></Col>



        
        <Col  SM={12} md={6} lg={4}><div class="box">
          <div className='watch'>
        <img src=' img/gallery/popular3.png'/>
        <a href="#">Add to Cart</a>
        </div>
        <div className='txt' >
        <h3><a href="#">Thermo Ball Etip Gloves</a></h3>
                        <p>$ 45,743</p>
                            
        </div>
        
        </div></Col>




        
        <Col   SM={12} md={6} lg={4}><div class="box">
          <div className='watch'>
        <img src=' img/gallery/popular4.png'/>
        
        <a href="#">Add to Cart</a>
        </div>
        <div className='txt' >
        <h3><a href="#">Thermo Ball Etip Gloves</a></h3>
                        <p>$ 45,743</p>
                        
        </div>
        
        </div></Col> 



        
        <Col  SM={12} md={6} lg={4}><div class="box">
        <div className='watch'>
        <img src=' img/gallery/popular5.png'/>
        
        <a href="#">Add to Cart</a>
        </div>
        <div className='txt' >
        <h3><a href="#">Thermo Ball Etip Gloves</a></h3>
                        <p>$ 45,743</p> 
        </div>
        
        </div></Col>



        
        <Col  SM={12} md={6} lg={4}><div class="box">
        <div className='watch'>
        <img src=' img/gallery/popular6.png'/> 
          <a href="#">Add to Cart</a>
        </div>
        <div className='txt' >
        <h3><a href="#">Thermo Ball Etip Gloves</a></h3>
                        <p>$ 45,743</p>
                        
        </div>
        
        </div></Col>


      </div>
    </Row>
  </Container>



</section>



<section class="chooseWatch">
        <Container>
            <Row>
            <div className='bassant'>
             

                <div class="main">
                    <h2>Watch of Choice</h2>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse.</p>
                    <a href="#" class="button1">show watches</a>
                </div>
                <div class="im">
                    <img src="img/gallery/choce_watch1.png" class="img-fluid"/>
                </div>
                </div>
            </Row>
        </Container>
    </section>



    
<section class="chooseWatch">
        <Container>
            <Row>
            <div className='bassant'>
              
            <div class="im">
                    <img src="img/gallery/choce_watch2.png" class="img-fluid"/>
                </div>
             
                <div class="main">
                    <h2>Watch of Choice</h2>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse.</p>
                    <a href="#" class="button1">show watches</a>
                </div>
                
                </div>
            </Row>
        </Container>
    </section>


       </div>
  )
}


export default Home