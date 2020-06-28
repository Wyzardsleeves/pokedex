const initialState = [{
  id: 2,
  name: 'cut',
  damage: 60
}]

const getMovesURL = 'https://pokeapi.co/api/v2/moves/'

let newMoves = [
  {
    id: 32,
    name: 'fire blast',
    damage: 120
  },
  {
    id: 13,
    name: 'dream eater',
    damage: 65
  }
]

export const movesReducer = (state = initialState, actions) => {
  return state
}
