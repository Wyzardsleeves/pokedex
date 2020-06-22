import React from 'react'
import device from 'assets/images/pokedex_device.png'

function PokedexDevice(){
  return(
    <div className="container">
      <h4>Pokedex Device View</h4>
      <img src={device} alt="pokedex_device.png" style={{width: "100%"}}/>
    </div>
  )
}

export default PokedexDevice
