

import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie, updateMovie } from '../reduxtoolkit/movieSlice';

const Reviewlist = () => {
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
  
    dispatch(deleteMovie(id));
  };

  const handleUpdate = (id, updatedMovie) => {
   
    dispatch(updateMovie({ id, ...updatedMovie }));
  };

  return (
    <div className='mlist'>
       
      {movies.map((movie) => (
        <div key={movie.id} className='list'>
         
          <h3>{movie.userName}</h3>
          <p>Title: {movie.movieTitle}</p>
          <p>Review: {movie.review}</p>
          <p>Rating: {movie.rating}</p>
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
          <button onClick={() => handleUpdate(movie.id, { userName: 'New User' })}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default Reviewlist;
