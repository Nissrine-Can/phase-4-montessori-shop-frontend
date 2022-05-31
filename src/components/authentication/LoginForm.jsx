import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { BASE_URL } from '../../Globals'


const Login = ({ setCurrentUser, setAuthenticated, setFavorites}) => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  
  
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
         setCurrentUser(user)
          setAuthenticated(true)
          setFavorites(user.items)
        setFormData({
          username: "",
          password: "",
        });
        navigate("/items")
      });
  }
  
  return (
    <div>
        <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            type='text'
            id='username'
            name="username"
            autoComplete="off"
            value={formData.username}
            onChange={handleChange}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            id='password'
            name='password'
            autoComplete='current-password'
            value={formData.password}
            onChange={handleChange}
          />

          <Button content='Login' primary />
         
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
       <Link to='/signup'><Button content='Sign up' icon='signup' size='big' /></Link> 
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    </div>
  )
}

export default Login