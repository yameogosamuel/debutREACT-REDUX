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
  //Ajouter un utilisateur
  addUser = user =>{
    user.id = Math.random();
    let users = [...this.state.nameList, user];//copie la liste et ajoute le nouveau user
    this.setState({
      nameList: users
    })
  }
  //Supprimer un utilisateur
  deleteUser = id =>{
    let users = this.state.nameList.filter(user => {
      return user.id !== id;
    })
    this.setState({
      nameList: users
    })
  }

  render() {
    return (
        <div className="App">

          <h1>Bonjour à tous!!!!</h1>
          <List deleteUser={this.deleteUser} list={this.state.nameList}/>
          <TestForm addUser={this.addUser}/>
        </div>
    );

  }
}

export default App;
