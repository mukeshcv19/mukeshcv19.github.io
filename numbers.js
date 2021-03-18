document.getElementById('btn').addEventListener('click',()=>{
    updateRandom();
})

function updateRandom(){
    var e = document.getElementById('num');
    var rand = Math.floor( Math.random()*51);
    e.innerText = rand;
}

updateRandom();