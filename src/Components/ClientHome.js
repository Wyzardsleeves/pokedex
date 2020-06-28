import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Switch, Route} from 'react-router-dom'
import Head from './Head'
import Foot from './Foot'
import PokedexStandard from 'Components/pokedex/PokedexStandard'
import PokedexDevice from 'Components/pokedex/PokedexDevice'
import PokemonEntry from 'Components/pokedex/PokemonEntry'
import axios from 'axios'

function Pokemon(){
  //const pokemon_list = useSelector()
  const dispatch = useDispatch()

  return(
    <div>
      <nav className="head-background grey lighten-2">
        <Head />
      </nav>
      <section className="body-background">
        <Switch>
          <Route path='/' render={PokedexStandard} exact/>
          <Route path='/device' render={PokedexDevice} exact/>
          <Route path='/entry/:id' render={PokemonEntry} exact />
        </Switch>
      </section>
      <section className="footer foot-background grey lighten-2">
        <Foot />
      </section>
    </div>
  )

}

export default Pokemon
