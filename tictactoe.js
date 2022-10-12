let turn="X";
let playchance=new Audio('ting.mp3')
var win=false;
let transform1;
let transform2;
let transform3;
/*playchance.play();*/
/*let gamemusic=new Audio('music.mp3')
gamemusic.play();*/
function nextturn()
{
    if(turn==="X")
    {
        return "0";
    }
    else{
        return "X";
    }

}

function iswin(){
    let arr=[[0,1,2,0,-120,0],
    [3,4,5,0,0,0],    
    [6,7,8,0,120,0],     
    [0,3,6,-130,10,90],   
    [1,4,7,0,10,90],   
    [2,5,8,120,10,90], 
    [0,4,8,10,12,45],      
    [2,4,6,-2,-8,135]] 
    for(let i=0;i<arr.length;i++)
    {
        let m=arr[i][0];
        let n=arr[i][1];
        let o=arr[i][2];
       
        if((document.querySelectorAll('.textbox')[m].innerHTML==document.querySelectorAll('.textbox')[n].innerHTML)&&(document.querySelectorAll('.textbox')[n].innerHTML==document.querySelectorAll('.textbox')[o].innerHTML)&&(document.querySelectorAll('.textbox')[m].innerHTML!=""))
        {
           
            win= true;
            transform1=arr[i][3];
            transform2=arr[i][4];
            transform3=arr[i][5];
        }
       /* console.log("m is ",document.querySelectorAll('.textbox')[m]);
        console.log("n is ",document.querySelectorAll('.textbox')[n]);*/
       /* console.log(m);
        console.log(n);
        console.log(o);*/
    }
    return win;
}
let arrlength=document.querySelectorAll('.box')
for(let i=0; i<arrlength.length; i++)
{
    document.querySelectorAll('.box')[i].addEventListener("click",function(){
      // if(document.querySelectorAll('.textbox')[i].innerText=""){
        let playchance=new Audio('ting.mp3');
        playchance.play();
        console.log("clicked");
        document.querySelectorAll('.textbox')[i].innerHTML=turn;
        win=iswin();
        console.log("yesh",win);
        if(win===true)
            {
                document.querySelector('.wturn').innerHTML="Player "+turn+" Wins";
                document.querySelector('.winningimage').style.width="150px";
                document.querySelector('.line').style.width="300px";
                document.querySelector('.line').style.height="5px";
                document.querySelector('.line').style.transform=`translate(${transform1}px,${transform2}px) rotate(${transform3}deg)`;
            }
            else{
                turn=nextturn();
                document.querySelector('.wturn').innerHTML="Player "+turn+" Turn";
            } 
      // }
    })
    
    
}


reset.addEventListener("click",function(){
       for(let i=0;i<arrlength.length; i++)
        {
            document.querySelectorAll('.textbox')[i].innerHTML=null;
        }
        win=false;
        console.log(win);
        turn='X';
        document.querySelector('.winningimage').style.width=0;
        document.querySelector('.wturn').innerHTML="Player "+turn+" Turn";
        document.querySelector('.line').style.width="0";
        document.querySelector('.line').style.height="0";
        
})
/*reset.addEventListener("click",function(){
    window.open('https://youtube.com')
})*/ 