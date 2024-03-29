const randomColor = function(){
    const hex =  '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color+= hex[Math.floor(Math.random()*16)]
        
    }
    return color
}
let interval;
const startchanging = function(){
   interval=setInterval(change ,1000);
}
const change = function(){
    document.body.style.backgroundColor = randomColor()
}
const stopchanging = function(){
    clearInterval(interval);
    interval=null;
}

document.querySelector('#start').addEventListener('click',startchanging)
document.querySelector('#stop').addEventListener('click',stopchanging)