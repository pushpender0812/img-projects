let counter = 0;
function getData(){
    console.log("fetching Data" + counter++ );
}
// function myDebounce(call,d){
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         setTimeout(() => {
//             call()
//         },d)
//     }
// }


// const BetterFunction = myDebounce(getData,1000);

let timer = 0;
function newData(){
    console.log("fetching the data" + timer++);
}

const myfunction = (call,t) =>{
    let time;
    return function(){
        if (time) clearTimeout(time);
            setTimeout(() => {
                call()
            }, t);
    }
}


const BetterFunction = myfunction (newData,1000);