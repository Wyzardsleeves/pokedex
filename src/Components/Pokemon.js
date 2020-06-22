import React, {useState, useEffect} from 'react'
import Head from './Head'
import Foot from './Foot'
import Moves from './Moves'
import Stats from './Stats'
import PokedexClassic from 'Components/pokedex/PokedexClassic'
import PokedexDevice from 'Components/pokedex/PokedexDevice'
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'

function Pokemon(){
  const [pokemon_list, setPokemonList] = useState(["pikachu", 25])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => setPokemonList(response.data.results))
    .catch((error) => console.log(error.message))
  })

  return(
    <div>
      <nav className="head-background grey lighten-2">
        <Head />
      </nav>
      <section className="body-background">
        <Switch>
          <Route path='/' render={() => <PokedexClassic pokemon={pokemon_list} />} exact/>
          <Route path='/device' render={() => <PokedexDevice pokemon={pokemon_list} />} exact/>
        </Switch>
      </section>
      <div className="foot-background grey lighten-2">
        <Foot />
      </div>
    </div>
  )
}

export default Pokemon
