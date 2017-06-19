//https://docs.google.com/presentation/d/1k1NmgNNh1wI-nLsr3UQjCQnX0QTeJJzL-r70Fud-6rs/edit#slide=id.g1e54a4144e_0_189

import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

const OrgDisplay = (props) => (
  <div>
    <h1>Oi, Mundo</h1>
    <h3>{props.name}</h3>
    {/* <img src={props.}>{props.name}</img> */}
    {props.name ==="region" ? <p>region</p> : <p>School</p>}
    
  </div>


)

// OrgDisplay.PropTypes = {
//   name:
// }

export default OrgDisplay;
