document.querySelector('div').addEventListener('click',() => {
    console.log('div clicked');
})

// document.querySelector('button').addEventListener('click',(e) => {
//     e.stopPropagation()
//     console.log('button clicked');
// })

// document.querySelector('button').addEventListener('click',(e) => {
//     // e.stopPropagation()
//     e.stopImmediatePropagation()
//     console.log('button1 clicked');
// })

document.querySelector('a').addEventListener('click',(e) => {
    // e.stopPropagation()
    e.preventDefault()
    console.log('anchor tab clicked');
})