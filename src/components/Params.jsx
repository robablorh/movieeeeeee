import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Params = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState({}); // Change to an object

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/movie/${id}`); // Fetch a single movie by ID
      const data = await response.data;
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  },[id]); // Trigger fetchMovie whenever the id parameter changes

  return (
    <div > 
      <Container >
        <Row >
          <Col>
            <img src={movie.url} alt='mov' /> {/* Correct 'image' to 'img' */}
          </Col>

          <Col className='Prams'> 
            <p className='mtitle'>Movie title: {movie.title}</p>
            <p className='mtitle'>Summary : {movie.summary}</p>
            <p className='mtitle'>Ratings: {movie.ratings}</p>
            <p className='mtitle'>Size : {movie.size}</p>
            <Link to='https://www.youtube.com/watch?v=pBk4NYhWNMM'> Watch Now</Link><br/><br/>
            <button>Download</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Params;
