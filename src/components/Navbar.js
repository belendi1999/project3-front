import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import logo from "../MatchEatLogo.png";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div class="navbar" style={{margin:"0", padding: "0", backgroundColor: "#F18383"}}>
    <nav >
    <Link to="/">
    <img class="logo" style={{width:"14rem"}} src={logo} alt="#" />
    </Link>
  

      {isLoggedIn
        ? (<>
        <div class="nav.links">
            <Link to="/tinder">
              <button>Haz swipe!</button>
            </Link>
            <Link to="/favorites">
              <button>Tus Match</button>
            </Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user.name}</span>
            </div>
          </>)
        : 
        (<>
         
        </>)
      }
    </nav>
    </div>
  );
}

export default Navbar;