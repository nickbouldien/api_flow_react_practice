// @flow

import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

class School extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      error: ""
    }
  }
  // it('sums numbers', () => {
  //   expect(sum(1, 2)).toEqual(3);
  //   expect(sum(2, 2)).toEqual(4);
  // });
  sum(a,b){
    return a + b
  }

  search(e){
    let schoolNumber = e.target.value;
    fetch(`http://canonical_schools.whooosreading.org/api/v1/public/schools/${schoolNumber}?embed=school.characteristics`)
      .then(response => response.json())
      .then( ({ school: items }) => this.setState({ items: items, error: "" }))
      .catch(err => this.setState({ items: [], error: err }))
  }

  // filter(e){
  //   this.setState({
  //     filter: e.target.value
  //   })
  // }

  render(){
    let items = this.state.items;
    console.log('items', items);

    // if(this.state.filter){
    //   items = items.filter( item =>
    //     item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    //   )
    // }

    let err = this.state.error ? <p>error: {this.state.error.message}</p> : ""

    return (
      <div>
        <h3>Search for a school</h3>

        <input
          type="number"
          onChange={this.search.bind(this)}
        />

        {err}

        { this.state.items.length === 0 ? <p>no data</p> : <Institution school={this.state.items}/>  }

        {/* <p>id: {items.id}</p>
        <p>name: {items.name}</p>
        <p>zip: {items.zip}</p> */}
        {/* {items.characteristics ? <p>city: {items.characteristics.city}</p> : <p>city:</p> }
        {items.characteristics ? <p>address: {items.characteristics.address}</p> : <p>address:</p> }
        {items.characteristics ? <p>Number of Students: {items.characteristics.num_students}</p> : <p>students:</p> }
        {items.characteristics ? <p>Number of Teachers: {items.characteristics.num_teachers}</p> : <p>teachers:</p> } */}


        {/* <input
          type="text"
          onChange={this.filter.bind(this)}
        /> */}

        {/* {items.map(item =>
          <Person key={item.name} person={item} />
        )} */}
      </div>
    )
  }
}

const Institution = (props) => (
  <div>
    <p>id: {props.school.id}</p>
    <p>name: {props.school.name}</p>
    <p>zip: {props.school.zip}</p>
    {props.school.characteristics ? <p>city: {props.school.characteristics.city}</p> : <p>city:</p> }
    {props.school.characteristics ? <p>address: {props.school.characteristics.address}</p> : <p>address:</p> }
    {props.school.characteristics ? <p>Number of Students: {props.school.characteristics.num_students}</p> : <p>students:</p> }
    {props.school.characteristics ? <p>Number of Teachers: {props.school.characteristics.num_teachers}</p> : <p>teachers:</p> }
  </div>
)

Institution.propTypes = {
  school: PropTypes.object.isRequired
}


export default School;
