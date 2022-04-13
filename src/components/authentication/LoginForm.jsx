import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Error from '../errors/Error';


const Login = ({onLogin}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password}),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
        <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            type='text'
            id='username'
            autoComplete="off"
            value={username}
            onChange={ (e) => setUsername(e.target.value)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
          />

          <Button content={isLoading ? "Loading..." : "Login"} primary />
          <Form.Input>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
          </Form.Input>
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    </div>
  )
}

export default Login