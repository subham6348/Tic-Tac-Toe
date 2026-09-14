let buttons = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgamebtn = document.querySelector("#newgame");
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let TurnX = true;
let count = 0
buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(TurnX === true){
        box.innerText = "X";
        box.disabled = true;
        TurnX = false;
        }
        else{
            box.innerText = "O";
            box.disabled = true;
            TurnX = true;
        }
        count ++;

       let  isWinner = checkwinner();

        if(count === 9 && ! isWinner){
            gameDraw();
        }

    });
}
);



const reset = ()=>{
    TurnX = true;
    count = 0;
    enablebox();
    msgcontainer.classList.add("hide");
}


const gameDraw = ()=>{
    msg.innerText = "Game was a draw";
     msgcontainer.classList.remove("hide");
     

}


const disablebox = ()=>{
    for(let box of buttons){
        box.disabled = true;
    }
}


const enablebox = ()=>{
    for(let box of buttons){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();

}



const checkwinner = ()=>{
    for(let pattern of winPattern){
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWinner(pos1Val);
                return true;
            
            };
        };
    };
    return false;
}

newgamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);


