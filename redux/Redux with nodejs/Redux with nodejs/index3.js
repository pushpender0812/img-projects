//Note: thunk me jb bhi hmko asi chij krni hai jisme hmko ko wait krna hai us case me hm dispatch function
//ke andr function call ki jgh function defination bejhte hai or thunk, function ko access dispatch or 
//getState ka access dega
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
async function getUser(dispatch,getState)//yha getState global state hai
{
    const {data} = await axios.get("http://localhost:3000/accounts/1");
    dispatch(initUser(data.amount));
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
    //yha function ki defination bejhte hai
    store.dispatch(getUser)
},5000)

//Note: ye 2 baar chlega bcoz isme 2 dispatch ho rhe hai
//first dispatch me hmne ek Async function dispatch kra hai jiska nam getUser hai or dusre dipatch me 
//initUser function chla hai jisme action "init" hai 