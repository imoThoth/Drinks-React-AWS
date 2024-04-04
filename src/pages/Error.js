import React from "react";
import { Link } from "react-router-dom";

export const Error =()=> {
    return(
        <section className="error-page section">
           <div className="error-container">
           <h1>Error, We've Reached A Dead End</h1>
           <Link to="/" className="btn btn-prinary"> 
                <button>Back to HomePage</button>
           </Link>
           </div>
        </section>
    )
}

export default Error;