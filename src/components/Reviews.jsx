import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../reduxtoolkit/movieSlice';
import {Container , Row, Col } from 'react-bootstrap'
import Reviewlist from './Reviewlist';

const Reviews = () => {
  const [userName, setUserName] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
     const id = Math.random().toString(36).substr(2, 9);
     dispatch(addMovie({ id, userName, movieTitle, review, rating }));
    
    setUserName('');
    setMovieTitle('');
    setReview('');
    setRating('');
  };

  return (
    
    <Container>
      <Row>
        <Col md='3'>
    <form onSubmit={handleSubmit} >
      <div className='Rform'>
        <label className='form-label'>User Name:</label>
        <input className='form-input' type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
      </div>
      <div>
        <label className='form-label'>Movie Title:</label>
        <input  className='form-input'type="text" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} required />
      </div>
      <div>
        <label className='form-label'>Review:</label>
        <textarea  className='form-inputt'value={review} onChange={(e) => setReview(e.target.value)} required />
      </div>
      <div>
        <label className='form-label'>Rating:</label>
        <input  className='form-input'type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
      </div>
      <button  className='form-submit'type="submit">Submit</button>
    </form>
    </Col>

    <Col>
         <Reviewlist/>
    </Col>
    </Row>
    
  </Container>
  );
};

export default Reviews;