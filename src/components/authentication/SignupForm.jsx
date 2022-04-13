import React, { useState } from 'react'
import { Button, Header, Form, Grid, Segment } from 'semantic-ui-react'
import Error from '../errors/Error'

const Signup = ({ setCurrentUser }) => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        contentType: "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json((user) => setCurrentUser(user));
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    });
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
                         type="text"
                         id="email"
                         value={email} 
                         onChange={ (e) => setEmail(e.target.value)}
                        />
                    <Form.Input 
                       placeholder='Username'
                        type='text'
                        id='username'
                        value={username}
                        onChange={ (e) => setUsername(e.target.value)}
                        />
                    <Form.Input 
                        placeholder='Password'
                        icon='lock'
                        iconPosition='left'
                        type='password'  
                        id='password'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                         />
                     <Form.Input 
                        placeholder='Password Confirmation'
                        icon='lock'
                        iconPosition='left'
                        type='password'  
                        id='password_confirmation'
                        value={passwordConfirmation}
                        onChange={ (e) => setPasswordConfirmation(e.target.value)}
                     />
                </Segment>

                <Segment>
                    <Button  color='blue'fluid type='submit'>{isLoading ? "Loading..." : "Sign Up"}</Button>
                    <Form.Input>
                      {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                      ))}
                    </Form.Input>
                </Segment>

            </Form>
              
      </Grid.Column>
    </Grid>
  </div>
  )
}

export default Signup