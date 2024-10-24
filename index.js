var randomNumber1=Math.floor((Math.random()*6)+1);
var image1=`./images/dice${randomNumber1}.png`;
document.querySelector(".img1").setAttribute("src",image1);
var randomNumber2=Math.floor((Math.random()*6)+1);
var image2=`./images/dice${randomNumber2}.png`;
document.querySelector(".img2").setAttribute("src",image2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It is a draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins!";

}

