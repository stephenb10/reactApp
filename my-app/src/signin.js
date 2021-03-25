import { Component } from 'react';
import { Button, Form, Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Signin({ signedIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  function handleSubmit(e) {
      e.preventDefault();
      axios.post('/api/users', {
        email: email,
        password: password
      })
      .then((res) => {
          console.log(res.data)
      })
  }
  
  return ( <div className="App mt-5">
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" 
      onChange={e => setEmail(e.target.value)}/>
     
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" 
      onChange={e => setPassword(e.target.value)}/>
    </Form.Group>

    <Form.Group controlId="formBasicConfirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" 
      onChange={e => setConfPassword(e.target.value)}/>
    </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="I agree to the terms and conditions" />
    </Form.Group>

    <div className="center-item">
    <Button onClick={handleSubmit} variant="primary" type="submit">
      Sign up
    </Button>
    </div>
  </Form>
</div>)
 
}
