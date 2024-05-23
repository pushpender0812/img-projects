// function Addition (a,b,c){
//     return a + b + c;   
// }

// let sum = Addition(1)(3)(7)
// console.log(sum);

// function Addition(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

userObj={
    name:"Ajay",
    age:27
}

function userInfo(obj){
        return function(userInfo){
            return obj[userInfo];
        }
}
let res = userInfo(userObj);
console.log(res('name'));