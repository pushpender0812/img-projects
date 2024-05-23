//multiple reducers example
import { createStore,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";


const init = "account/init";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const incBonus = "bonus/increment";

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
        case init:
            return {amount:action.payload};
        case inc:
            return {amount : state.amount+1};
        case dec:
            return {amount : state.amount-1};
        case incByAmt:
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
        case incBonus:
            return{points : state.points + 1}
        case incByAmt:
            if(action.payload>=100){
                return {points : state.points + 1};
            }
        default:
            return state;    
    }
}


//Action creators

//Async API Calling
function getUserAccount(id)
{
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/account/${id}`);
        dispatch(initUser(data.amount));
    };
}
function initUser(value)
{
    return {type:init,payload:value};
}
function increment()
{
    return {type:inc}
}
function decrement()
{
    return {type:dec}
}
function incrementByAmount(value)
{
    return {type:incByAmt,payload:value}
}
function incrementBonus(){
    return {type:incBonus}
}

setTimeout(()=>{
    store.dispatch(incrementBonus())
},5000)