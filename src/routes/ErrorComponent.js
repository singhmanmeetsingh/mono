import React, { Suspense } from 'react';
import ErrorImg from '../assets/images/404_Error.jpg'

const ErrorComponent = ()=> {

    return (
        <div className="error404">
            <img src={ErrorImg}/>
        </div>
            
    )
}

export default ErrorComponent
