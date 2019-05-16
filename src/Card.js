import React, { Component } from 'react';
import data from './data.js';
import App from './App'

class Card extends Component {


  render(){
    let num = this.props.cardIndexPass
  

  return (
    <div className='card'>
        <div id='pageCount'>
            {data[num].id}/25
        </div>
            <h1 id="person">
                {data[num].name.first} {" "} {data[num].name.last}
            </h1>
              <div className='info'> <strong>From:</strong> &nbsp; {data[num].city} {", "} {data[num].country}</div>
              <div className='info'>  <strong>Job Title:</strong> &nbsp; {data[num].title}</div>
              <div className='info'>  <strong>Employer:</strong> &nbsp; {data[num].employer}</div>
            <br/>
            <div className='info'><strong>Favorite Movies:</strong></div>
            <ol>
                <li>1.{" "}&nbsp;{data[num].favoriteMovies[0]}</li>
                <li>2.{" "}&nbsp;{data[num].favoriteMovies[1]}</li>
                <li>3.{" "}&nbsp;{data[num].favoriteMovies[2]}</li>
            </ol>
            
        {/* {data.innerHTML = JSON.stringify(data)} */}

    </div>



  )
  }}



export default Card;