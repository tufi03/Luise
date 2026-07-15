// ======================================
// FINAL CHAPTER SCRIPT 🎂
// ======================================


// ======================================
// ELEMENTS
// ======================================


const candles =
document.querySelectorAll(".candle");


const wishButton =
document.getElementById("wishButton");


const instruction =
document.getElementById("instructionText");


const finalMessage =
document.getElementById("finalMessage");



let litCandles = 0;







// ======================================
// CREATE STARS
// ======================================


function createStars(){


    const stars =
    document.getElementById("stars");



    for(let i=0;i<50;i++){


        const star =
        document.createElement("div");


        star.className="star";


        star.innerHTML="⭐";


        star.style.left =
        Math.random()*100+"%";


        star.style.top =
        Math.random()*70+"%";



        star.style.animationDelay =
        Math.random()*3+"s";



        stars.appendChild(star);


    }


}



createStars();









// ======================================
// CANDLE CLICK
// ======================================


candles.forEach((candle)=>{


    candle.addEventListener(
    "click",
    ()=>{


        if(candle.classList.contains("lit")){

            return;

        }



        candle.classList.add(
            "lit"
        );



        litCandles++;



        if(litCandles === candles.length){


            instruction.innerHTML =
            "All candles are lit ✨";


            wishButton.style.display =
            "inline-block";


        }



    });


});








// ======================================
// MAKE WISH
// ======================================


wishButton.addEventListener(
"click",
()=>{


    instruction.innerHTML =
    "Make your wish... 💫";



    wishButton.style.display =
    "none";



    blowCandles();



});








// ======================================
// WIND EFFECT
// ======================================


function blowCandles(){


    document.body.classList.add(
        "wind"
    );



    instruction.innerHTML =
    "🌬️✨";



    setTimeout(()=>{


        candles.forEach(
        candle=>{


            candle.classList.remove(
                "lit"
            );


        });



        instruction.innerHTML =
        "";



        createHeartExplosion();



    },2000);




    setTimeout(()=>{


        showFinalMessage();


    },3500);



}








// ======================================
// HEART EXPLOSION
// ======================================


function createHeartExplosion(){


    for(let i=0;i<40;i++){



        const heart =
        document.createElement("div");



        heart.className =
        "heart";


        heart.innerHTML =
        "❤️";



        heart.style.left =
        "50%";


        heart.style.top =
        "50%";



        document.body.appendChild(
            heart
        );



        setTimeout(()=>{


            heart.remove();


        },5000);



    }



}









// ======================================
// FLOATING HEARTS
// ======================================


function createFloatingHeart(){


    const heart =
    document.createElement("div");



    heart.className =
    "heart";


    heart.innerHTML =
    "❤️";



    heart.style.left =
    Math.random()*100+"%";



    heart.style.animationDuration =
    5+Math.random()*5+"s";



    document
    .getElementById(
    "floatingHearts"
    )
    .appendChild(
        heart
    );



    setTimeout(()=>{


        heart.remove();


    },10000);



}




setInterval(
createFloatingHeart,
1000
);









// ======================================
// FINAL MESSAGE
// ======================================


function showFinalMessage(){


    finalMessage.style.display =
    "flex";



}



console.log(
"Final birthday chapter loaded 🎂❤️"
);

document
.getElementById("homeButton")
.addEventListener("click",()=>{

    window.location.href="index.html";

});