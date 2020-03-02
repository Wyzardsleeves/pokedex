import React from 'react'
import Pokedex from './Pokedex'
import Head from './Head'
import Foot from './Foot'
import Moves from './Moves'
import Stats from './Stats'
import {Switch, Route} from 'react-router-dom'

function ClientMain(){
  return(
    <div>
      <div className="head-background">
        <Head />
      </div>
      <div>
        <Switch>
          <Route path='/' render={Pokedex} exact/>
          <Route path='/moves' render={Moves}/>
          <Route path='/stats' render={Stats}/>
        </Switch>
      </div>
      <div className="foot-background">
        <Foot />
      </div>
    </div>
  )
}

export default ClientMain
