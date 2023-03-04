function roll(){
    let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
    let randomNumber2 = Math.floor((Math.random() * 6)) + 1;

    let randomImg1 = "images/dice" + randomNumber1 + ".png";
    let randomImg2 = "images/dice" + randomNumber2 + ".png";

    let image1 = document.querySelectorAll("img")[0];
    let image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", randomImg1);
    image2.setAttribute("src", randomImg2);

    let h1 = document.querySelector("h1");

    if (randomNumber1 === randomNumber2) {
        h1.textContent = "Draw !";
    } else if (randomNumber1 > randomNumber2) {
        h1.textContent = "🚩 Player 1 Wins !";
    } else {
        h1.textContent = "Player 2 Wins ! 🚩";
    }
}