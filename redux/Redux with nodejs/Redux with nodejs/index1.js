
import { createStore,applyMiddleware} from "redux";
import logger from "redux-logger";

const store = createStore(reducer,applyMiddleware(logger.default));


function reducer(state={amount:1},action)
{
    if(action.type==='increment')
    {
        return {amount : state.amount+1}
    }
    if(action.type==='decrement')
    {
        return {amount : state.amount-1}
    }
    if(action.type==='incrementByAmount')
    {
        return {amount : state.amount+action.payload}
    }
    return state;
}

//Action creators
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

setInterval(()=>{
    store.dispatch(incrementByAmount(5))
},2000)

//Note: logger middleware ka kaam console me redux process ka log dikhana hota hai like prev state, action,
//next state