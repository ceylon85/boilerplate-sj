import React, { useEffect } from 'react';
import Axios from 'axios';

function Reset() {
    
    useEffect(() => {
        Axios.get('/reset/' + this.props.match.params.token)
        .then(response => {
          // Conditional logic here based on response returned
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Reset



