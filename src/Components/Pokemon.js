import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Pokemon(){
  const [pokemon_list, setPokemon] = useState(["pikachu", 25])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => setPokemon(response.data.results))
    .catch((error) => console.log(error.message))
  })

  return(
    <div>
      <ul>
        {pokemon_list.map((pokemon) =>
          <li>{pokemon.name}</li>
        )}
      </ul>
    </div>
  )
}

export default Pokemon
