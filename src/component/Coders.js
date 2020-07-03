import React from 'react';
import PauseOnHover from "./PauseOnHover"

function Coders() {
    return (
        <div className="coders" style={{position:"relative"}}>
            <div className="container-fluid">
                <div className="row">
               
                <h1 className="light-heading2" >Developers</h1>
                            <h1 className="heading1">The Coders</h1>
                </div>
                <div class="container-fluid coder-content">
                    <PauseOnHover time={3500}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Coders
