let gameSeq=[];
let userSeq=[];
let btns=["red","green","yellow","purple"];
let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Key is pressed");
        started=true;
        levelUp();
}

});
let h2=document.querySelector("h2");
function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function trackBtn(btn){
    btn.classList.add("trackbtn");
    setTimeout(function(){
        btn.classList.remove("trackbtn");
    },300);

}
function checkVal(idx){
   
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
        

    
    else{
        h2.innerHTML=`Game Over<br> Your score was:<b>${level}</b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150
        );

        reset();
    }
   
}
function btnCheck(){
    let btna=this;
    trackBtn(btna);

    let user=btna.getAttribute("id");

    userSeq.push(user);
    checkVal(userSeq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btno of allbtns){
    btno.addEventListener("click",btnCheck);
}

function levelUp(){
    userSeq=[]; 
    level++;
    h2.innerText=`level ${level}`;
    let randind=Math.floor(Math.random()*4);
    let randbtn=btns[randind];
    let randcolor=document.querySelector(`.${randbtn}`);
    flashBtn(randcolor);
    gameSeq.push(randbtn);
   
    
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
