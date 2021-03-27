import { useState } from 'react';
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