import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import PokemonEntry from './PokemonEntry'

function PokedexStandard(props){

  function prevPage(){
    console.log("prevPage")
  }

  function nextPage(){
    console.log("nextPage")
  }

  console.log(props)

  return(
    <section className="container">
      <div>
        <table>
          <tr>
            <td><button className="btn" onClick={prevPage}>Previous Page</button></td>
            <td><button className="btn" onClick={nextPage} style={{float: "right"}}>Next Page</button></td>
          </tr>
        </table>
      </div>
      <div className="classic-list">
        <ul>
          {/*props.pokemon.map((pokemon, index) =>
            <li>
              <NavLink to={`/entry/${index}`}><h5>{pokemon.name}</h5></NavLink>
            </li>
          )*/}
        </ul>
      </div>
    </section>
  )
}

export default PokedexStandard
