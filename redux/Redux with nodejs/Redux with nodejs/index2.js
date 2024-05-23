//Why thunk middleware


//npm i -g json-server -for making fake Api server
//After that
//json-server db.json


import { createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import axios from "axios";

const store = createStore(reducer,applyMiddleware(logger.default));


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
//Async API Calling


//Action creators

//Async API Calling
async function initUser(value)
{
    const {data}= await axios.get("http://localhost:3000/accounts/1");
    return{type:"init",payload:data.amount}
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

setInterval(()=>{
    store.dispatch(initUser())
},2000)

//Error: Action must be plain Object. 
//Note : Action creators Synchronous hi hote hai ye sidhe hi object return krne ke liye bne hote hai wait 
//krne ke liye nhi hote so this is the problem to solve this problem we uses redux-thunk middleware.

//jb hm Action creator ko call krte hai toh dispatch ki access ko rokna or dispatch ko action ke sath call
//krna redux-thunk middleware ka kaam hota hai