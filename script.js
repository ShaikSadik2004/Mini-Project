let user_score = 0
let comp_score = 0

let userChoice = document.querySelectorAll(".choice")
let meassage = document.querySelector("#msg")
let userscore_display = document.querySelector("#User-score")
let compscore_display = document.querySelector("#Comp-score")

let Generate_Comp_choice = ()=>{
    const choices = ['rock','paper','scissors']
    const comp = Math.floor(Math.random()*3)
    return choices[comp]
}

let Drawgame = ()=>{
    console.log("The Game is Draw");
    meassage.innerText = "The Game is Draw. Play again"
    meassage.style.backgroundColor = "#121928"
}

let PlayerWin = (userId,Comp_choice)=>{
    console.log("Congrats! YOU WON THE GAME");
    meassage.innerText = `Congrats YOU WON! Your ${userId} beats ${Comp_choice}`;
    meassage.style.backgroundColor = "green"
    user_score++;
    userscore_display.innerText=user_score

}

let Comp_win = (userId,Comp_choice)=>{
    console.log("Sorry ! COMPUTER WON THE GAME");
    meassage.innerText = `SORRY YOU LOSE! ${Comp_choice} beats Your ${userId}`;
    meassage.style.backgroundColor = "red"
    comp_score++;
    compscore_display.innerText=comp_score;

    
}

let Gamestart = (userId)=>{
    console.log(`PLAYER CHOICE =${userId}`);
    let Comp_choice = Generate_Comp_choice()
    console.log(`COMPUTER CHOICE =${Comp_choice}`);

    if (userId===Comp_choice){
        Drawgame()
    }else if((userId==='rock' && Comp_choice==='scissors') || (userId==='paper' && Comp_choice==='rock') || (userId==='scissors' && Comp_choice==='paper')){
        PlayerWin(userId,Comp_choice)
    }else if((userId==='scissors' && Comp_choice==='rock') || (userId==='rock' && Comp_choice==='paper') || (userId==='paper' && Comp_choice==='scissors')){
        Comp_win(userId,Comp_choice)
    }

}


userChoice.forEach((val)=>{
    val.addEventListener("click",()=>{
        const userId = val.getAttribute("id");
        Gamestart(userId);

    })
})
