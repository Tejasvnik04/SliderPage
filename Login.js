import { Link } from "react-router-dom";
import "./form.css";

export const LogIn = () =>{
return(
    <div className="Page">
        <div className="Form">
            <form>
                <div className='Email'>
                    <label id='title'>Log In</label><br/> <br/>
                    <input type='text' id='tb' placeholder='  Email' required/> <br/> <br/> <br/>
                    <input type='password' id='tb' placeholder='  Password' required/> <br/>
                    <Link to="/Forget"><input type='button' id='frgtpswrd' value='Forget Password?'/></Link><br/> <br/>
                    <input className='Submit' type='Submit' id='li' value='Log In'></input><br/><br/>
                </div>
                <div className='New'>
                    <label id='qstn'>Don't Have an Account?</label>
                    <Link to="/SignUp"><input type='button' id='new' value='Create an Account'/></Link>
                </div>
            </form>
        </div>
    </div>
    )
}
