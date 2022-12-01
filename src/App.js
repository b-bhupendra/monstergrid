// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import CardList  from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';


class App extends  Component{
  constructor(){
    super()
    this.state = {
      
      "monsters":[],
      "searchField" : ""
    }
  }

  componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>this.setState(()=>{
      // return a object/dict that have a key alredy present in this.state
      return {
        monsters:data
      }
    }))

  }
   handleSearch = (event)=>{
          return this.setState({"searchField" : event.target.value });
  } 

  render(){
  
    const FilterMonster = this.state.monsters.filter((mons)=>{

      return mons.name.includes(this.state.searchField)
    });
   
    const {handleSearch} = this;
    
  return (<div className='App'>
      
    <SearchBox onChangeHandler = {handleSearch} placeholder = {'search monster'} className = {'search-monster'} />
    <CardList monsters = {FilterMonster} />      
    
    </div>

    )

  }
}


export default App;
