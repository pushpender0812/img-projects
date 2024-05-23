//multiple reducers example
import { createStore,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({
        account:Accountreducer,
        bonus:Bonusreducer
    })
    ,applyMiddleware(logger.default,thunk.default));


function Accountreducer(state={amount:1},action)
{
    switch(action.type)
    {
        case "init":
            return {amount:action.payload};
        case "increment":
            return {amount : state.amount+1}
        case "decrement":
            return {amount : state.amount-1};
        case 'incrementByAmount':
            return {amount : state.amount+action.payload}
        default:
            return state;    
    }
}

//ek reducer me srif usi reducer ki state change ho skti hai dusre reducer ki nhi
function Bonusreducer(state={points:0},action)
{
    switch(action.type)
    {
        case "incrementByAmount":
            if(action.payload>=100){
                return {points : state.points + 1};
            }
        default:
            return state;    
    }
}


//Action creators

//Async API Calling
function getUser(id)
{
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/account/${id}`);
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
    store.dispatch(incrementByAmount(100))
},5000)