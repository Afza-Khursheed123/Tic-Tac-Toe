let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');

let player1_turn = true;
const winning_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let modal=document.querySelector('#result');
let victory= document.querySelector('#msg');
let closebutton = document.querySelector('.close');
let newgame= document.querySelector("#restart");
const msgbox=(res)=>{
    console.log("modal displa");
    if(res=="O"){
       victory.innerText=`Victory is of Player 1!`;
    }else{
        victory.innerText=`Victory is of Player2!`;

    }
   modal.style.display='block';
   disable();

}
const checkwinner=()=>{
    let res=''
    for(let pattern of winning_pattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
if(pos1 !="" && pos2 !="" && pos3 !=""){
    if(pos1===pos2 && pos2===pos3){
      res = pos1;
      msgbox(res);
    }
  
    }
    
    }
   
   
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player1_turn){
            box.innerText = "O";
            player1_turn = false;
        }
        else{
            box.innerText ="X"
            player1_turn=true
        }
        box.disabled=true;
        checkwinner();
        checktie();
    })


});
const checktie=()=>{
    allfill=true;
boxes.forEach((box)=>{
    let text=box.innerText
    if(text===''){
        allfill =false;
    }
  
});
if(allfill && !checkwinner()){
    victory.innerText=`Game Tie!`;

    modal.style.display='block';
    disable();
}
}
const disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
})
newgame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    close();
})
const close=()=>{
    modal.style.display="none";

}
 closebutton.addEventListener("click",close)
