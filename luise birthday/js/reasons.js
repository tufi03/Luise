// ==========================================
// REASONS I LOVE YOU - SCRIPT
// ==========================================


// ==========================================
// LOVE MESSAGES
// Change these whenever you want ❤️
// ==========================================


const reasons = [

    "I love your smile. It can make even an ordinary day feel special ❤️",

    "I love how kind and caring you are. You always make people feel loved ❤️",

    "I love the way you make me laugh. Even the smallest moments with you become memories ❤️",

    "I love how comfortable I feel with you. I can always be myself around you ❤️",

    "I love all the little moments we share. They mean more to me than you know ❤️"

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



let openedHearts = 0;

let opened = [];



// hide finish initially

finish.style.display="none";




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


    // later connect:
    // window.location.href="story.html";


});



console.log(
"Reasons chapter loaded ❤️"
);