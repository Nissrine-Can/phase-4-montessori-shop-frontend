import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Grid, Menu } from 'semantic-ui-react'


const Navbar = () => {

    const linkStyles = {
        width: "5 rem",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration: "none",
        color: "black",
      }


  return (
    <div>
      <Grid padded>
       <Menu borderless fluid size="large">
       
            <Link to="/">
                <Menu.Item>
                MONTESSORI SHOP
                </Menu.Item>
            </Link>
        
            <NavLink 
                    to="/"
                    style={linkStyles}
                    >
                        <Menu.Item>Home</Menu.Item>
            </NavLink>
       
        <NavLink 
                to="/about-us"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
                >
                    <Menu.Item>About us</Menu.Item>
                </NavLink>

         <NavLink 
                to="/items"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
                >
                    <Menu.Item>Explore</Menu.Item>
             </NavLink>
         
         <NavLink 
                to="/favorites"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
                >
               <Menu.Item>Favorites</Menu.Item> 
        </NavLink>

         <Menu.Menu position='right'>

         <NavLink 
                to="/signup"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
             >
                <Menu.Item>Sign Up</Menu.Item>
         </NavLink>
         
         <NavLink 
                to="/login"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
             >
          <Menu.Item>Login</Menu.Item>
          </NavLink>

        </Menu.Menu>
         
        
        </Menu>
        </Grid>
        
    </div>
  )
}

export default Navbar