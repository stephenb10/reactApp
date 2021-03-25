import { Component } from 'react';
import { Button, Form, Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Signup from './signup';


export default function Content() {

    const [signedIn, setSignedIn] = useState(false)

    function stateChanged(details) {
        console.log(details)
        setSignedIn(true);
    }

    if (signedIn) {
        console.log("now signed in")
        return <p> signed in</p>

    }
    else {
        return <Signup signedUP={stateChanged}/>
    }
}