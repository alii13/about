import React from 'react'

function Card(props) {
    const {name,description}=props;
    const image=(props.image===undefined)?("Ellipse"):(props.image);
    
    return (
        <div className ="mx-5">
            <div className="row">
              <div className="col-md-4 profile-center">
                  <img src={require(`../${image}.png`)} className="img-fluid profile-photo"  alt="member" />
                  
              </div>
              <div className="col-md-8" style={{padding:"0px"}}>
                  
                  <div className="card-box">
                  <div className="d-flex justify-content-start">
                  <h4 className="card-heading">{name}</h4>
                  </div>
                      <p className="justify">{description} </p>
                      <div className="d-flex justify-content-start"><span><i className="fa fa-instagram card-icons" aria-hidden="true"></i></span> <span><i className="fa fa-linkedin card-icons" aria-hidden="true"></i></span></div>
                      
                  </div>
                 
                  
              </div>

            </div>
            
        </div>
    )
}

export default Card
