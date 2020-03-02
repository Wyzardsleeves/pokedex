import React, {useState, useEffect} from 'react'
import pokedex from 'assets/images/pokedex.png'

function Pokemon(){
  return(
    <div>
      <img src={pokedex} alt="pokedex.png" style={{width: "300px"}}/>
      <h3>This is from the Head component</h3>
    </div>
  )
}

export default Pokemon
