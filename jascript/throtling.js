

// const mythrottle = (fn,d) => {
//     return function(...args){
//         document.getElementById('myId').disabled = true; 

//         setTimeout(() => {
//             fn()
//         },d);
//     }
// }



// const newfun = mythrottle(() => {
//     document.getElementById('myId').disabled = false;
//  console.log("User Clicked.!!");
// },5000)



const mythrottle = ((fn,d) => {
    return function () {
        document.getElementById("myId").disabled = true;
  setTimeout (() => {
    fn()
  },d)
}
})




const newfun = mythrottle (() => {
    console.log("User just clicked !!");
    document.getElementById("myId").disabled = false;

},5000)