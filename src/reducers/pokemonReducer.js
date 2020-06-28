const initialState = [{
  id: 26,
  name: 'ekans',
  moves: ['poinson sting', 'leer', 'wrap', 'bite']
}]

const getPokemonURL = 'https://pokeapi.co/api/v2/pokemon/'

let pokemon = [
  {
    id: 1,
    name: 'bulbasaur',
    moves: ['tackle', 'growl', 'vine whip', 'poison powder']
  },
  {
    id: 4,
    name: 'charmander',
    moves: ['scratch', 'growl', 'ember', 'smoke screen']
  }
]

export const pokemonReducer = (state = initialState, action) => {
  return state
}
