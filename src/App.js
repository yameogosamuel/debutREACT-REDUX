import React, {Component} from 'react';
//import TestCompo from "./TestCompo";
import List from "./List";
import TestForm from "./TestForm";

class App extends Component{
state = {
  nameList : [
    {id: 1, name: 'Samuel', age: 26, sexe: 'Masculin'},
    {id: 2, name: 'Nathalie', age: 30, sexe: 'Féminin'},
    {id: 3, name: 'Augustin', age: 5, sexe: 'Masculin'}
  ]
}
  render() {
    return (
        <div className="App">

          <h1>Bonjour à tous!!!!</h1>
          <List list={this.state.nameList}/>
          <TestForm />
        </div>
    );

  }
}

export default App;
