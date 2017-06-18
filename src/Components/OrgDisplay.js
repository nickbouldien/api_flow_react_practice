import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

const OrgDisplay = (props) => (
      <h1>Oi, Mundo</h1>

      <h3>{props.name}</h3>
      {/* <img src={props.}>{props.name}</img> */}
      {props.name ==="region" ? <p>region</p> : <p>School</p>}

)

// OrgDisplay.PropTypes = {
//   name:
// }

export default OrgDisplay;
