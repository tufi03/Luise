// ==========================================
// REASONS I LOVE YOU - SCRIPT
// ==========================================


// ==========================================
// LOVE MESSAGES
// Change these whenever you want ❤️
// ==========================================


const reasons = [

    "I love The way you slightly tilt your head when you catch me staring at you.",

    "I love Your cuteness aggression when we're together.",

    "I love the way you grab my ass whenever you see it.",

    "I love how How seamlessly gorgeous you look at any point of the day.",

    "I love How amazingly talented you are.",

    "I Love Your laugh; both the cute one and the crazy one.",

    "I love Your scent, your touch, and the way you rub your feet against mine because they're always cold.",

    "I love your Your random hiccups.",

];



// ==========================================
// ELEMENTS
// ==========================================


const hearts =
document.querySelectorAll(".loveHeart");


const messageBox =
document.getElementById("messageBox");


const loveMessage =
document.getElementById("loveMessage");


const finish =
document.getElementById("finish");


const continueButton =
document.getElementById("continueButton");

let score = 0;

let time = 0;

let gameStarted = false;

let timerInterval;

let openedHearts = 0;

let opened = [];

// ==========================================
// RANDOM HEART POSITIONS
// MOBILE FRIENDLY
// ==========================================

function positionHearts(){

    hearts.forEach((heart)=>{

        // keep away from edges
        const x = 15 + Math.random() * 70;
        const y = 25 + Math.random() * 50;


        heart.style.left = x + "%";
        heart.style.top = y + "%";

    });

}


positionHearts();


// hide finish initially

finish.style.display="none";


function startGame(){

    if(gameStarted) return;


    gameStarted=true;


    document
    .getElementById("gameHUD")
    .classList.add("active");


    timerInterval=setInterval(()=>{

        time++;

        document
        .getElementById("timer")
        .textContent=time;


    },1000);


}

// ==========================================
// HEART CLICK SYSTEM
// ==========================================


hearts.forEach((heart)=>{


    heart.addEventListener("click",()=>{


        const index =
        heart.dataset.index;



        if(opened.includes(index)){

            return;

        }



        opened.push(index);



        openedHearts++;

        score++;


        document
        .getElementById("score")
        .textContent = score;
        startGame();


        // animation

        heart.classList.add("opened");



        createSparkles(
            heart
        );



        showMessage(
            reasons[index]
        );



        if(openedHearts === hearts.length){


            setTimeout(()=>{


                showFinish();
                clearInterval(timerInterval);

            },2500);


        }



    });



});




// ==========================================
// SHOW MESSAGE
// ==========================================


function showMessage(text){


    messageBox.classList.add("show");


    loveMessage.innerHTML =
    text;



    setTimeout(()=>{


        messageBox.classList.remove("show");


    },9000);



}



// ==========================================
// FINISH SCREEN
// ==========================================


function showFinish(){


    finish.style.display="flex";


    createHeartExplosion();



}




// ==========================================
// SPARKLES
// ==========================================


function createSparkles(element){


    const rect =
    element.getBoundingClientRect();



    for(let i=0;i<12;i++){


        const sparkle =
        document.createElement("div");


        sparkle.innerHTML="✨";


        sparkle.className="sparkle";



        sparkle.style.left =
        rect.left +
        Math.random()*50
        +"px";


        sparkle.style.top =
        rect.top +
        Math.random()*50
        +"px";



        document.body.appendChild(
            sparkle
        );



        setTimeout(()=>{


            sparkle.remove();


        },1200);



    }


}




// ==========================================
// HEART EXPLOSION
// ==========================================


function createHeartExplosion(){


    for(let i=0;i<40;i++){


        const heart =
        document.createElement("div");


        heart.innerHTML="❤️";


        heart.className=
        "explodingHeart";



        heart.style.left="50%";

        heart.style.top="50%";



        heart.style.setProperty(
            "--x",
            (Math.random()*500-250)+"px"
        );


        heart.style.setProperty(
            "--y",
            (Math.random()*500-250)+"px"
        );



        document.body.appendChild(
            heart
        );



        setTimeout(()=>{


            heart.remove();


        },2000);



    }


}





// ==========================================
// BACKGROUND ANIMALS
// ==========================================


const animals=[

"🐰",
"🐻",
"🐱",
"🐶",
"🐼",
"🦊"

];


function createAnimal(){


    const animal =
    document.createElement("div");


    animal.className="animal";


    animal.innerHTML =
    animals[
    Math.floor(
    Math.random()*animals.length
    )
    ];



    animal.style.left =
    Math.random()*90+"%";


    animal.style.top =
    Math.random()*90+"%";


    animal.style.animationDuration =
    (10+Math.random()*15)+"s";



    document
    .getElementById("animalLayer")
    .appendChild(animal);



    setTimeout(()=>{


        animal.remove();


    },25000);



}



setInterval(
createAnimal,
1500
);





// ==========================================
// PETALS
// ==========================================


function createPetal(){


    const petal =
    document.createElement("div");


    petal.className="petal";


    petal.innerHTML="🌸";



    petal.style.left =
    Math.random()*100+"%";


    petal.style.animationDuration =
    (8+Math.random()*10)+"s";



    document
    .getElementById("petalLayer")
    .appendChild(petal);



    setTimeout(()=>{


        petal.remove();


    },15000);



}



setInterval(
createPetal,
1200
);




// ==========================================
// STARS
// ==========================================


function createStar(){


    const star =
    document.createElement("div");


    star.className="star";


    star.innerHTML="⭐";



    star.style.left =
    Math.random()*100+"%";


    star.style.top =
    Math.random()*100+"%";



    document
    .getElementById("stars")
    .appendChild(star);



}



for(let i=0;i<30;i++){

    createStar();

}



// ==========================================
// CONTINUE BUTTON
// ==========================================


continueButton.addEventListener(
"click",
()=>{


    console.log(
    "Going to next chapter ❤️"
    );


    window.location.href="ourstory.html";

});



console.log(
"Reasons chapter loaded ❤️"
);