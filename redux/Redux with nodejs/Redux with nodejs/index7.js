//multiple reducers example
import { createStore,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";


const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const getAccUserPending = "account/getUser/pending";
const getAccUserFulfilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";
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
        case getAccUserFulfilled:
            return {amount:action.payload, pending:false}
        case getAccUserPending:
            return {...state, pending:true}  
        case getAccUserRejected:
            return {...state,error:action.error,pending:false}     
        case inc:
            return {amount : state.amount+1}
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
        try{
            dispatch(getAccountUserPending());
            const {data} = await axios.get(`http://localhost:3000/accounts/${id}`);
            dispatch(getAccountUserFulfilled(data.amount));
        }catch(error){
            dispatch(getAccountUserRejected(error.message));
        }
        
    };
}
function getAccountUserFulfilled(value)
{
    return {type:getAccUserFulfilled,payload:value};
}
function getAccountUserPending()
{
    return {type:getAccUserPending};
}
function getAccountUserRejected(error)
{
    return {type:getAccUserRejected,error:error};
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
    store.dispatch(getUserAccount(1))
},5000)