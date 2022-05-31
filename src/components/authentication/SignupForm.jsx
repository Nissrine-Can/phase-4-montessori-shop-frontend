import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Header, Form, Grid, Segment } from 'semantic-ui-react'
import { BASE_URL } from '../../Globals'

const Signup = ({ setCurrentUser, setAuthenticated, setFavorites }) => {

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: ""
   });

   const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
   
    const userCreds = { ...formData }
    fetch(BASE_URL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userCreds),
    })
    .then((resp) => resp.json())
    .then((user) => {
      console.log(user)
      setFormData({
        email: "",
        username: "",
        password: "",
        passwordConfirmation: ""
      })
      setCurrentUser(user)
      setAuthenticated(true)
      setFavorites(user.items)
      navigate("/items")
    })
  }
  
  return (
    <div style= {{ paddingTop: "50px" }}>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style= {{ maxWidth: 450 }}>
          
           <Header as="h1" textAlign='center'>Register</Header>
          
            <Form onSubmit={handleSubmit}>

                <Segment>
                    <Form.Input 
                        placeholder='joe@schmoe.com'
                        name="email"
                         type="text"
                         id="email"
                         value={formData.email} 
                         onChange={handleChange}
                        />
                    <Form.Input 
                       placeholder='Username'
                       name="username"
                        type='text'
                        id='username'
                        value={formData.username}
                        onChange={handleChange}
                        />
                    <Form.Input 
                        placeholder='Password'
                        name="password"
                        icon='lock'
                        iconPosition='left'
                        type='password'  
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                         />
                     <Form.Input 
                        placeholder='Password Confirmation'
                        name="passwordConfirmation"
                        icon='lock'
                        iconPosition='left'
                        type='password'  
                        id='passwordConfirmation'
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                     />
                </Segment>

                <Segment>
                    <Button  color='blue'fluid type='submit'>"Sign Up"</Button>
                    
                </Segment>

            </Form>
              
      </Grid.Column>
    </Grid>
  </div>
  )
}

export default Signup