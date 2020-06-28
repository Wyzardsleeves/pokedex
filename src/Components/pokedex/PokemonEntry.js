import React, {useEffect, useState} from 'react'
import axios from 'axios'

function PokemonEntry(props){

  return(
    <section className="container">
      <h4>Entry for PokemonName</h4>
      <div className="pokemon-entry-info">
        <h5>Data will go here.</h5>
      </div>
    </section>
  )

  const mapStateToProps = (state) => {
    const {pokemon_list} = state
  }

}

export default PokemonEntry
