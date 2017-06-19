// @flow

import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

class District extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      district: null,
      error: ""
    }
  }

  search(e){
    let districtNumber = e.target.value;
    console.log(districtNumber);
    fetch(`canonical_schools.whooosreading.org/api/v1/public/districts/${districtNumber}?embed=district.schools`)
      .then(response => response.json())
      .then( (district) => console.log(district))//this.setState({ district: district, error: "" }))
      .catch(err => this.setState({ district: null, error: err }))
  }

  render(){

      console.log(this.state)


    return (
      <div>

        <h3>Search for a school district</h3>

        <input
          type="number"
          placeholder={1980}
          onChange={this.search.bind(this)}
        />



      </div>
    )
  }
}



export default District;
