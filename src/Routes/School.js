import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => <h1>Hello, World</h1>

class School extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      error: ""
    }
    // this.updateTextArea = this.updateTextArea.bind(this);

  }

  // componentWillMount(){
  //   // school id: 79629
  //   // fetch('http://swapi.co/api/people/?format=json')
  //
  // }
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

    // var characteristics;
    // if(this.state.items.characteristics){
    //   console.log('here');
    //   characteristics = (
    //
    //   )
    // }

    return (
      <div>
        <h3>Search for a school</h3>
        <input
          type="number"
          onChange={this.search.bind(this)}
        />
        {err}


        <p>id: {items.id}</p>
        <p>name: {items.name}</p>
        <p>zip: {items.zip}</p>
        {items.characteristics ? <p>city: {items.characteristics.city}</p> : <p>city:</p> }
        {items.characteristics ? <p>address: {items.characteristics.address}</p> : <p>address:</p> }
        {items.characteristics ? <p>Number of Students: {items.characteristics.num_students}</p> : <p>students:</p> }
        {items.characteristics ? <p>Number of Teachers: {items.characteristics.num_teachers}</p> : <p>teachers:</p> }


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

// const Person = (props) => <h4>{props.person.name}</h4>


export default School;
