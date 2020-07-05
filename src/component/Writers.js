import React from 'react';
import PauseOnHover from "./PauseOnHover"

function Writers() {
    return (
        <div className="coders" >
            <div class="container-fluid">
                <div class="row">
               
            
                            <h1 className="heading text-pop-up-top">Content Writers</h1>
                </div>
                <div class="container-fluid coder-content">
                    <PauseOnHover time={5000}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Writers;
