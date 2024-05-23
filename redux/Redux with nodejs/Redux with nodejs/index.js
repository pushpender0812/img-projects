//"type": "module",
import { createStore} from "redux";


const store = createStore(reducer);
const history=[];

//reducer
function reducer(state={amount:1},action)
{
    if(action.type==='increment')
    {
        //mutable
        // state.amount=state.amount+1;


        //immutability(not change old object)
        return {amount : state.amount+1}
    }
    return state;
}

//global state - ye global store ki state hoti hai
// console.log(store.getState());

//jb bhi state me change hota hai ye chlta hai isme new changes aate hai old nhi aate
store.subscribe(()=>{
    history.push(store.getState())
    console.log(history);
})


setInterval(()=>{
    store.dispatch({type:"increment"})
},2000)



// Redux principle : 
// Single Source of Truth --->global store
// immutable updates
// reducer should be pure
