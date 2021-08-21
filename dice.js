function roll() {

    // location.reload();

    var imgArr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

    var rand1 = Math.floor((Math.random() * 6));
    var rand2 = Math.floor((Math.random() * 6));

    document.querySelector(".img1").setAttribute("src", imgArr[rand1]);
    document.querySelector(".img2").setAttribute("src", imgArr[rand2]);

    if (rand1 > rand2) {
        document.querySelector("#winner").innerHTML = "Player 1 Wins!";
    } else if (rand1 == rand2) {
        document.querySelector("#winner").innerHTML = "Draw!";
    } else {
        document.querySelector("#winner").innerHTML = "Player 2 Wins!";
    }

}