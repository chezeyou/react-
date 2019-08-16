
import {combineReducers} from 'redux'
import cartStore from './cartStore/reducer'
//真正的reducer
const reducer = combineReducers({
    cartStore
    // todoStore,calculatorStore
})

export default reducer