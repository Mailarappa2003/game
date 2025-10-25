let userscore=0;
let compscore=0;
let user=document.getElementById("user-score");
let comp=document.getElementById("compter-score")
const msg=document.querySelector("#msg")
const chioces=document.querySelectorAll(".chioce");
const gencompchioce=()=>{
    const options=["rock","paper","scissers"];
    const randix=Math.floor(Math.random()*3);
    return options[randix];
}
const draw=()=>{
    console.log("game is draw");
    msg.innerHTML="game is draw .play again!";
    msg.style.backgroundColor="black"
    
}
let showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        user.innerHTML=userscore;
        console.log("you win");
        msg.innerHTML="you win";
          msg.style.backgroundColor="green"
        
    }
    else{
        compscore++;
        comp.innerHTML=compscore;
        console.log("you lose");
         msg.innerHTML="you lose";
           msg.style.backgroundColor="red"
        
    }
}

const playgame=(userchoice)=>{
    console.log("user chioce---->",userchoice);
    const compchioce=gencompchioce();
    console.log("comp chioce--->",compchioce);
    if(userchoice==compchioce){
        draw();

    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchioce==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchioce==="scissers"?false:true;
        }
        else{
            userwin=compchioce==="rock"?false:true;
        }
        showwinner(userwin);
    }
    
    
    

}
chioces.forEach((chioce)=>{
    chioce.addEventListener('click',()=>{
        let userchoice=chioce.getAttribute("id")
        playgame(userchoice);
        
    })
})