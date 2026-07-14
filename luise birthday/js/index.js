const giftButton = document.getElementById("giftButton");


giftButton.addEventListener("click", () => {

    window.location.href = "gift.html";

});


const giftButton =
document.getElementById("giftButton");


if(distance <= 0){

    clearInterval(countdown);


    document.getElementById("countdown").innerHTML =
    "Happy Birthday Luise ❤️";


    giftButton.style.display =
    "inline-block";

}