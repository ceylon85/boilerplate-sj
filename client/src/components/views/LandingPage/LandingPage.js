import React, {useEffect} from 'react'
import Axios from 'axios';


function LandingPage() {

    useEffect(() => {
        Axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'
        ,width: '100%', height: '100vh'}}>
          <h2>landing</h2>  
        </div>
    )
}

export default LandingPage
