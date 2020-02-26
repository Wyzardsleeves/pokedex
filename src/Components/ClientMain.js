import React from 'react'
import Pokemon from './Pokemon'
import Head from './Head'
import Foot from './Foot'

function ClientMain(){
  return(
    <div>
      <div>
        <Head />
      </div>
      <div>
        <Pokemon />
      </div>
      <div>
        <Foot />
      </div>
    </div>
  )
}

export default ClientMain
