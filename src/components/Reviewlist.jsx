

import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../reduxtoolkit/movieSlice';

const Reviewlist = () => {
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
  
    dispatch(deleteMovie(id));
  };


  return (
    <div className='mlist'>
       
      {movies.map((movie) => (
        <div key={movie.id} className='list'>
         
          <h3>{movie.userName}</h3>
          <p>Movie Title: {movie.movieTitle}</p>
          <p>Review: {movie.review}</p>
          <p>Rating: {movie.rating}</p>
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
         
        </div>
      ))}
    </div>
  );
};

export default Reviewlist;
