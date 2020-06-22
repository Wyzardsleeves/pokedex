import React, {useState, useEffect} from 'react'
import pokedex from 'assets/images/pokedex.png'
import 'assets/styles/head.css'
import {Link} from 'react-router-dom'
function Pokemon(){
  return(
      <section className="container ">
        <img src={pokedex} alt="pokedex.png" style={{width: "300px"}}/>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/"><span className="grey-text text-darken-2">UI View</span></Link>
          </li>
          <li>
            <Link to="/device"><span className="grey-text text-darken-2">Pokedex View</span></Link>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Wyzardsleeves/pokedex">
              <span className="grey-text text-darken-2">Github</span>
            </a>
          </li>
        </ul>
      </section>
  )
}

export default Pokemon
