import React from 'react';
import PauseOnHover from "./PauseOnHover"

function Writers() {
    return (
        <div className="coders" style={{position:"relative"}}>
            <div class="container-fluid">
                <div class="row">
               
                <h1 className="light-heading2" >Writers</h1>
                            <h1 className="heading1">Content Writers</h1>
                </div>
                <div class="container-fluid coder-content">
                    <PauseOnHover time={5000}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Writers;
