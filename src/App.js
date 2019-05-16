import React, { Component } from 'react';
import data from './data.js';
import NavBar from './NavBar'
import Card from './Card'
import Buttons from './Buttons'
import './App.css';
// import './reset.css';
class App extends Component {


constructor(props){
  super(props);
      this.state = {
          cardIndex: 0, 
      }
}




addItem(e){
  e.preventDefault()
  if(this.state.cardIndex === 24){
    let cardIndexReset = this.state.cardIndex
    this.setState({ cardIndex: parseInt(0) });
  }
  else{
    let cardIndex = this.state.cardIndex
    cardIndex++
    this.setState({cardIndex})
  }
}
decreaseItem(e){
  e.preventDefault()
  if(this.state.cardIndex === 0){
    let cardIndexReset = this.state.cardIndex
    this.setState({ cardIndex: parseInt(24) });
  }
  else{
    let cardIndex = this.state.cardIndex
    cardIndex--
    this.setState({cardIndex})
  }
}



  render(){
  
console.log(this.state.cardIndex)
  return (
    <div>
      <NavBar />
       <Card cardIndexPass={this.state.cardIndex} />

       <div className='buttons'>

          <button className='buttons' 
          onClick={(e) => {this.decreaseItem(e)}}>
          &lt; &nbsp; Previous</button>

          <button className='buttons' 
          onClick={(e) => {this.addItem(e)}}>
          Next &nbsp; &gt;</button>

       </div>   
    </div>
  );
}
}
export default App;
