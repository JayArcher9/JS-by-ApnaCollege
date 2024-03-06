let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("click", function(){  
    if(started == false){
        console.log("Game started");
        started = true;

        levelup();
    }      
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }

    else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b>, Press anywhere to start`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "red";
        }, 300);
        
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 450);

        setTimeout(reset, 1000);
    }

    }

function btnPress() {
    if(!started){
        return;
    }
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length - 1);
     
}

let allBtns = document.querySelectorAll(".btn")
for (let btn of allBtns ) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0; 
}
