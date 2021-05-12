import './Home.css';
import {
  Link 
   } from "react-router-dom";

const Home = () => {
    return (
      <div className="home-container">
        <div className="the-button-container">
           <Link to="/list"><button className="the-button">Button</button></Link>
        </div>
      </div>
    );
  }

  export default Home;