document.getElementById('spiffy').onclick = randomColor


function randomColor(){
    let color = ("#" + (Math.floor(Math.random()*16777215).toString(16)));
    document.querySelector('body').style.background = color;
    console.log(color)
}
