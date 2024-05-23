import { createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const store = createStore(reducer,applyMiddleware(logger.default,thunk.default));


function reducer(state={amount:1},action)
{
    switch(action.type)
    {
        case "init":
            return {amount:action.payload}
            break;
        case "increment":
            return {amount : state.amount+1}
            break;
        case "decrement":
            return {amount : state.amount-1};
            break;
        case 'incrementByAmount':
            return {amount : state.amount+action.payload}
            break;
        default:
            return state;    
    }
}


//Action creators

//Async API Calling
function getUser(id)
{
    //yha pr closure function ka concept use ho rha hai
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch(initUser(data.amount));
    };
}
function initUser(value)
{
    return {type:"init",payload:value};
}
function increment()
{
    return {type:"increment"}
}
function decrement()
{
    return {type:"decrement"}
}
function incrementByAmount(value)
{
    return {type:"incrementByAmount",payload:value}
}

setTimeout(()=>{
    //yha pr function currying use ho rha hai
    store.dispatch(getUser(2))
},5000)