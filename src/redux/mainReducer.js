import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp110101997Reducer from '../features/SignUp110101997/redux/reducers'
import Dashboard110101995Reducer from '../features/Dashboard110101995/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp110101997: SignUp110101997Reducer,
Dashboard110101995: Dashboard110101995Reducer,

});