//dependencies
import {combineReducers} from 'redux'

//custom reducers
import {pokemonReducer} from 'reducers/pokemonReducer'
import {movesReducer} from 'reducers/movesReducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  moves: movesReducer
})

export default rootReducer
