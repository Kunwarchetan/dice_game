
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDice = "dice"+randomNumber1+".png";
const randomImageSource = "/images/"+randomDice;
const image1 = document.querySelectorAll("img") [0]; 
image1.setAttribute("src", randomImageSource);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDice2 = "/images/dice"+randomNumber2+".png";
const image2 = document.querySelectorAll("img") [1]; 
image2.setAttribute("src", randomDice2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else {
         document.querySelector("h1").innerHTML = "Draw! 🤝";
    }

    