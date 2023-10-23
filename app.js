let main = document.querySelector(".container");
let black = document.querySelector(".black");
let rainbow = document.querySelector(".rainbow");
let erase = document.querySelector(".erase");
let clear = document.querySelector(".clear")


function createGrid(rows,cols){
    main.style.setProperty("--grid-rows", rows);
    main.style.setProperty("--grid-cols",cols);
    
    for(let C=0; C < (rows * cols); C++){
       let cell = document.createElement("div");
       main.appendChild(cell).className = 'grid-item'; 
    }
}

function getColor(){
    let square = document.querySelectorAll('.grid-item');
    let randomR = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomT = Math.floor(Math.random() * 256);

    for(let i = 0; i < square.length; i++){
     square[i].addEventListener('mouseover', (e) => {
        square[i].style.backgroundColor = `black`
     })
    }
}

function rainbox(){
  let square = document.querySelectorAll(".grid-item");  
  let randomR = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  let randomT = Math.floor(Math.random() * 256);

  for(let i = 0; i < square.length; i++){
    square[i].addEventListener('mouseover', (e) => {
       e.target.value = `rgb(${randomR},${randomB}, ${randomT})`;
       square[i].style.backgroundColor = e.target.value;
    })
   }
}

function eraser(){
    let square = document.querySelectorAll('.grid-item');
    let randomR = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomT = Math.floor(Math.random() * 256);

    for(let i = 0; i < square.length; i++){
     square[i].addEventListener('mouseover', (e) => {
        square[i].style.backgroundColor = `white`
     })
    }
}

function clears(){
    let square = document.querySelectorAll('.grid-item');
    let randomR = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomT = Math.floor(Math.random() * 256);

      for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = null;
    }
}

createGrid(16, 16);
black.addEventListener('click', getColor);
rainbow.addEventListener('click', rainbox);
erase.addEventListener('click', eraser);
clear.addEventListener("click", clears);
