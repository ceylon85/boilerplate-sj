import React, {useEffect} from 'react'
import Axios from 'axios';


function LandingPage() {

    useEffect(() => {
        Axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])
    return (
        <div>
            landing
        </div>
    )
}

export default LandingPage
