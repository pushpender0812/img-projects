//why we use combine reducer
const state = {account:{amount:1},bonus:{points:2}}
const newstate = {account:{amount:state.account.amount},bonus:{points:state.bonus.points+1}}

console.log(newstate,state);
state.account.amount = 100;
console.log(newstate,state);
