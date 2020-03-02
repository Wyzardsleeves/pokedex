import React, {useState, useEffect} from 'react'
import poke_api from 'assets/images/poke_api.png'

function Foot(){
  return(
    <div className="container">
      <h5>Powered by <img src={poke_api} alt="poke_api.png" style={{height: "50px"}}/></h5>
    </div>
  )
}

export default Foot
