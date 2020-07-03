import React from 'react'
import gallery from "../gallery.jpg";

function hero() {
    return (
        <div className="hero"  style={{position:"relative"}}>
            <div className="row heading-title">
                <div className="col-md-7 my-auto">
                    <div className="row ">
                        <div className="container">
                        <h1 className="light-heading " style={{position:"absolute",bottom:"32%"}}>Know</h1>
                            <h1 className="heading">About us</h1>
                            <div className="">
                            <p className="title-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-5 ">
                    {/*
                    give upper classs concentric
                    <div className="circle">
                <div id="container">
                    <div id="circle">
  
                <div id="small-circle">
                <div id="small-circle">
                
                </div>
                </div>
                </div>

                </div>
                </div>
                    */}
                    <img src={gallery} alt="team" className="img-fluid team"/>
                    <div className="">
                            <p className="title-description-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            </div>
                    
                </div>

                
            </div>
            
        </div>
    )
}

export default hero
