import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Container , Col ,Row} from "react-bootstrap"
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Cartoons= () => {
 
  const[movies , setMovies]=useState([]);

  

  const fetchMovies = async () => {
      try {

          const response = await axios.get("http://localhost:3000/cartoons");
          const data = await response.data;
           setMovies(data);
         
          
      } catch (error) {
          console.log(error);
          
      }
      
  };

  
      useEffect(() => {
          fetchMovies();

      },[])
  
return (
  <div>
      
      <Container>
      <h1>New Release</h1>
          <Row>
          
              { movies.map((movie)=>(
                  <Col key={movie.id} xs={12} md={2}>
                 <Link to={`/params/${movie.id}`} className="overflow-hidden">   
                 
                       <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={movie.url} alt="movieImage" />
              <Card.Body>
            
                
              </Card.Body>
              
            </Card>
            </Link>
                  
                  </Col>
              ))

              }
          </Row>
      </Container>
     
  </div>
)
}



export default Cartoons