import React from "react";
import { NavLink } from "react-router-dom";


const urembo = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "pink",
  textDecoration: "none",
  color: "white",
    
}
function NavBar() {

return <>
<NavLink to="/" exact style={urembo} 
activeStyle={{ background: 'red', color: 'white' }}>Home</NavLink>
<NavLink to="/movies" exact style={urembo} 
activeStyle={{ background: 'red', color: 'white' }}>Movies</NavLink>
<NavLink to="/directors"exact style={urembo}
 activeStyle={{ background: 'red', color: 'white' }}>Directors</NavLink>
<NavLink to="/actors"exact style={urembo} 
activeStyle={{ background: 'red', color: 'white' }}>Actors</NavLink>
</>;
}

export default NavBar;
