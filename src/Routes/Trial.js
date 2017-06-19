import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => <h1>Hello, World</h1>

class Stuff extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
    // this.updateTextArea = this.updateTextArea.bind(this);

  }

  componentWillMount(){
    fetch('http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then( ({ results: items }) => this.setState({ items }))
  }

  render(){
      let items = this.state.items;
      console.log(items);

      // if(this.state.filter){
      //   items = items.filter( item =>
      //     item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      //   )
      // }

      return (
        <div>

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

const Person = (props) => <h4>{props.person.name}</h4>

var totals = {}

var objects = [
  {"luke":1},
  {"nick":2},
  {"nick":2},
  {"luke":3},
  {"luke":2},
  {"other":1},
  {"other":5}
]

for(var i=0; i< objects.length; i++){
  for(var key in objects[i]) {
     if (!totals.hasOwnProperty(key)) {
         totals[key] = objects[i][key];
     } else {
       totals[key] = totals[key] + objects[i][key];
     }
 };
}
