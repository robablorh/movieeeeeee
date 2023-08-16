import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Container , Col ,Row} from "react-bootstrap"
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const Cartoons= () => {
    const navigate =useNavigate()

 
  const[movies , setMovies]=useState([]);

  

  const fetchMovies = async () => {
      try {

          const response = await axios.get('../../movies.json');
          const data = await response.data;
          console.log(data)
           setMovies(data.cartoons);
         
         
          
      } catch (error) {
          console.log(error);
          
      }
      
  };

  
      useEffect(() => {
          fetchMovies();

      },[])
  
return (
  <div className='cartoons'>
      
      <Container >
      <h1>New Release</h1>
          <Row>
          
              { movies.map((movie, idx)=>(
                  <Col key={movie.id + idx } xs={12} md={2}>
                  
                 
                       <Card  className='cardstyle'  style={{ width: '12rem' }}
                       onClick={()=>{navigate(`/params/${movie.id}`,{state:movie})}}>
              <Card.Img variant="top" src={movie.url} alt="movieImage" />
              
              
            </Card>
           
                  
                  </Col>
              ))

              }
          </Row>
      </Container>
     
  </div>
)
}



export default Cartoons
