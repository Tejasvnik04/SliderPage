import pic from "./images/logopic.png";
import {Link} from "react-router-dom";
const Navbar = () => {
   return (  
      <nav className="navbar">
         <div className="logo"><img src={pic}/></div>
         <div className="links">

            <Link to="/" style={{
               color: "black",
               backgroundColor: '#FFCE44',
               borderRadius:'8px'
            }}>
              <p>Home</p> 
   
            </Link>
            <Link to="/about"><p>About</p></Link>
         <Link to="/contact"><p>Contact</p></Link>

         </div>
      </nav>
   );
}
 
export default Navbar;
