import React, {useState, useEffect} from 'react'
import poke_api from 'assets/images/poke_api.png'
import 'assets/styles/foot.css'

function Foot(){
  return(
    <div className="container">
      <h5>Powered by
        <a target="_blank" href="https://pokeapi.co/">
          <img src={poke_api} alt="poke_api.png" style={{height: "50px"}}/>
        </a>
      </h5>
    </div>
  )
}

export default Foot
