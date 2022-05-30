import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Grid, Menu, Button, Icon } from 'semantic-ui-react'

const linkStyles = {
  width: "5 rem",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "black",
}

const Navbar = ({ currentUser, setCurrentUser, setAuth }) => {

  const [activeItem, setActiveItem] = useState(null)
  const handleItemClick = (e, { name }) => setActiveItem( name )

  const navigate = useNavigate()

  const handleLogout = () => {
    fetch("/logout", {
      method: 'DELETE'
    })
    console.log('logged out')
    setCurrentUser(null)
    setAuth(false)
    navigate("/")
  }
  

    return (
    <div className="navbar">
      <Grid padded>
       <Menu borderless fluid size="large">
       
            <NavLink 
                    to="/"
                    style={linkStyles}
                    >
            <Menu.Item
             name='Montessori Shop'
             active={activeItem === 'Montessori Shop'}
             onClick={handleItemClick}
            > Montessori Shop</Menu.Item>           
            </NavLink>
       
        <NavLink 
                to="/about-us"
                style={linkStyles}
                >
                    <Menu.Item
                    name='About Us'
                    active={activeItem === 'About Us'}
                    onClick={handleItemClick}
                    >About Us</Menu.Item>
         </NavLink>

         <NavLink 
                    to="/items"
                    style={linkStyles}
                    >
                       <Menu.Item
                       name='Buy'
                       active={activeItem === 'Buy'}
                       onClick={handleItemClick}
                       >Buy</Menu.Item>
          </NavLink>

                
         
        
          {currentUser? (
            <>
             <NavLink 
                       to="/favorites"
                       style={linkStyles}
                       >
                     <Menu.Item
                     name='Favorites'
                     active={activeItem === 'Favorites'}
                     onClick={handleItemClick}
                     >Favorites</Menu.Item>
                </NavLink>

         <Menu.Menu position="right">
        
                <NavLink 
                   to="/items/new"
                   style={linkStyles}
                   >
                   <Menu.Item
                   name='Sell'
                   active={activeItem === 'Sell'}
                   onClick={handleItemClick}>Sell</Menu.Item>
                 </NavLink>

                 <h4 style={{color: "blue"}}>Welcome, {currentUser.username}!</h4>

                 <NavLink
                   to="/account"
                   style={linkStyles}
                  >
                   <span className="nav-span"><Icon name="user" bordered color="blue" area-label="user"/></span>
                 </NavLink>

              <Button 
              onClick={handleLogout}
              >
                  Logout
                </Button>
            
        </Menu.Menu>
        

       </>
      
           ) : (
            <>
           <Menu.Menu position='right'>
           <NavLink 
                to="/signup"
                style={linkStyles}
                activestyle={{ background: "darkblue" }}
             >
                <Menu.Item>Sign Up</Menu.Item>
         </NavLink>
         
         <NavLink 
                to="/login"
                style={linkStyles}
                activestyle={{ background: "darkblue" }}
             >
          <Menu.Item>Login</Menu.Item>
          </NavLink>
          </Menu.Menu>

           </>
           ) }
           
         
        
        </Menu>
        </Grid>
        
    </div>
  )
}

export default Navbar