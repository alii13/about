import React from 'react';
import PauseOnHover from "./PauseOnHover"

function Designers() {
    return (
        <div className="coders" style={{position:"relative"}}>
            <div class="container-fluid">
                <div class="row">
               
                <h1 className="light-heading2" >Designers</h1>
                            <h1 className="heading1">UX/UI DESIGNERS</h1>
                </div>
                <div class="container-fluid coder-content">
                    <PauseOnHover one="Wilber" time={4000}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Designers
