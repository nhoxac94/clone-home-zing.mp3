import { createStore, combineReducers, applyMiddleware  } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import listSongReducer from "containers/module/reducer";


const rootReducer = combineReducers({
    listSongReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    
);

export default store;