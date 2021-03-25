import logo from './logo.svg';
import './App.css';
import { Button, Form, Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Signup from './signup.js'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import Content from './content';


function App() {
  useEffect(() => {
    axios.get('/api/database')
    .then(res => {
      setdbString(JSON.stringify(res.data))
    })
  }, [])

  // Create a variable on the left and a function on the right to update our variable, useState sets the initial value of the variable
  const [dbString, setdbString] = useState('')

  return (
    <div> 
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TASKER</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="mr-5">
        <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          
        </Form> */}
        
      </Navbar.Collapse>
    </Navbar>


    {/* <p>{dbString}</p> */}

        <Content />
   
    </div>
  );
}

export default App;
