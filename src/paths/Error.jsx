import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
         <h1>ERROR 404</h1> 
         <p>This page does not exist!</p>
         <p> Go back to the home page <Link to="/">Home</Link></p>
    </div>
  )
}

export default Error