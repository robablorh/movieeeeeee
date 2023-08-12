
import Reviewlist from "../components/Reviewlist";


const Home = () => {
    return (
     <div>
           <form className='homie' >
            <label> Unlimited movies, TV shows, and more <br/>
                Watch anywhere. Cancel anytime.<br/>
               Ready to watch?<br/> 
               Enter your email to create <br/>or restart your membership.</label> <br/>
            <br/>
           
            <input className='in'  placeholder="Search Movies/Series/Cartoons"/>
            <button className='btn2'> Search</button>
            
          </form><br/>


          

         
    </div>
         
              
    )
  }
  
  export default Home;