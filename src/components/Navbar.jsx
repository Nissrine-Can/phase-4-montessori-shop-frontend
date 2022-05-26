import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Grid, Menu, Button, Icon } from 'semantic-ui-react'

const linkStyles = {
  width: "5 rem",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "black",
}

const Navbar = ({ auth, currentUser, setCurrentUser, setAuth }) => {

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
            <Menu.Item> Montessori Shop</Menu.Item>           
            </NavLink>
       
        <NavLink 
                to="/about-us"
                style={linkStyles}
                activestyle={{ background: "darkblue" }}
                >
                    <Menu.Item>About Us</Menu.Item>
         </NavLink>

         <NavLink 
                    to="/items"
                    style={linkStyles}
                    activestyle={{ background: "darkblue" }}
                    >
                       <Menu.Item>Buy</Menu.Item>
          </NavLink>

                
         
        
          {currentUser? (
            <>
             <NavLink 
                       to="/favorites"
                       style={linkStyles}
                       activestyle={{ background: "darkblue" }}
                       >
                     <Menu.Item>Favorites</Menu.Item>
                </NavLink>

         <Menu.Menu position="right">
        
                <NavLink 
                   to="/items/new"
                   style={linkStyles}
                   activestyle={{ background: "darkblue" }}
                   >
                   <Menu.Item>Sell</Menu.Item>
                 </NavLink>

                 <h4 style={{color: "blue"}}>Welcome, {currentUser.username}!</h4>

                 <NavLink
                   to="/account"
                   style={linkStyles}
                   activestyle={{ background: "darkblue" }}
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