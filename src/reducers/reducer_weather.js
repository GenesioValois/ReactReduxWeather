import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_WEATHER:
      // never manipulate state, create a new one
      // state.concat([action.payload.data]) same as:;
      return [ action.payload.data, ...state ]
  }
  return state
}
