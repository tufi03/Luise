// ==========================================
// OUR STORY - INTERACTIVE FLOWER 🌸
// ==========================================


// ==========================================
// STORY DATA
// Change these later with your own memories ❤️
// ==========================================


const memories = [

    {
        title: "🌱 The Beginning",

        text:
        "The moment our story started. I didn't know that meeting you would become one of the most special parts of my life."
    },


    {
        title: "✨ Getting Closer",

        text:
        "Little conversations became my favorite moments. Somehow, spending time with you always felt easy."
    },


    {
        title: "❤️ Falling For You",

        text:
        "Slowly, you became someone who could make me smile without even trying."
    },


    {
        title: "🌸 Our Memories",

        text:
        "All the laughs, jokes, and little moments we share are things I will always treasure."
    },


    {
        title: "⭐ Today",

        text:
        "I'm so lucky to have you in my life. You make normal days feel special."
    },


    {
        title: "🌹 The Future",

        text:
        "I can't wait for all the memories we still haven't made and all the chapters waiting for us."
    }

];




// ==========================================
// ELEMENTS
// ==========================================


const petals =
document.querySelectorAll(".petal");


const overlay =
document.getElementById("memoryOverlay");


const title =
document.getElementById("memoryTitle");


const text =
document.getElementById("memoryText");


const closeButton =
document.getElementById("closeMemory");


const nextButton =
document.getElementById("nextPetal");


const ending =
document.getElementById("ending");



let currentPetal = 0;






// ==========================================
// INITIAL LOCK SYSTEM
// ==========================================


petals.forEach((petal,index)=>{


    if(index !== 0){

        petal.classList.add("locked");

    }



    petal.addEventListener("click",()=>{


        openPetal(index);


    });



});






// ==========================================
// OPEN PETAL
// ==========================================


function openPetal(index){


    // block wrong petals

    if(index !== currentPetal){

        return;

    }



    const petal =
    petals[index];



    petal.classList.remove(
        "active"
    );


    petal.classList.add(
        "falling"
    );



    showMemory(
        memories[index]
    );


}






// ==========================================
// SHOW MEMORY
// ==========================================


function showMemory(memory){


    title.innerHTML =
    memory.title;


    text.innerHTML =
    memory.text;



    overlay.style.display =
    "flex";


}







// ==========================================
// CONTINUE TO NEXT PETAL
// ==========================================


nextButton.addEventListener(
"click",
()=>{


    overlay.style.display =
    "none";



    currentPetal++;



    if(currentPetal < petals.length){



        unlockPetal(
            currentPetal
        );



    }
    else{


        finishFlower();


    }


});







// ==========================================
// UNLOCK NEXT PETAL
// ==========================================


function unlockPetal(index){


    petals[index].classList.remove(
        "locked"
    );


    petals[index].classList.add(
        "active"
    );


}







// ==========================================
// FINAL FLOWER
// ==========================================


function finishFlower(){


    createBloom();


    setTimeout(()=>{


        ending.style.display =
        "flex";


    },2500);



}






// ==========================================
// BLOOM EFFECT
// ==========================================


function createBloom(){


    const flower =
    document.getElementById(
        "flower"
    );


    flower.animate([


        {
            transform:
            "scale(1)"
        },


        {
            transform:
            "scale(1.25)"
        },


        {
            transform:
            "scale(1)"
        }


    ],{


        duration:1500,

        easing:"ease-in-out"


    });



    for(let i=0;i<40;i++){


        createPetalExplosion();


    }


}






function createPetalExplosion(){


    const petal =
    document.createElement("div");


    petal.innerHTML =
    "🌸";


    petal.style.position =
    "absolute";


    petal.style.left =
    "50%";


    petal.style.top =
    "50%";


    petal.style.fontSize =
    "25px";


    document.body.appendChild(
        petal
    );



    petal.animate([


        {

            transform:
            "translate(0,0)",

            opacity:1

        },


        {

            transform:

            `
            translate(
            ${Math.random()*500-250}px,
            ${Math.random()*500-250}px
            )
            `,

            opacity:0

        }


    ],{


        duration:2000


    });



    setTimeout(()=>{


        petal.remove();


    },2000);



}








// ==========================================
// FLOATING BACKGROUND PETALS
// ==========================================


function createFloatingPetal(){


    const petal =
    document.createElement("div");


    petal.className =
    "backgroundPetal";


    petal.innerHTML =
    "🌸";


    petal.style.position =
    "absolute";


    petal.style.left =
    Math.random()*100+"%";


    petal.style.top =
    "-50px";


    petal.style.fontSize =
    "25px";



    document
    .getElementById(
    "floatingPetals"
    )
    .appendChild(
        petal
    );



    petal.animate([


        {

        transform:
        "translateY(0) rotate(0)",

        opacity:1

        },


        {

        transform:

        `
        translateY(110vh)
        rotate(360deg)
        `,

        opacity:0

        }


    ],{


        duration:
        8000 +
        Math.random()*4000,


        easing:
        "linear"


    });



    setTimeout(()=>{


        petal.remove();


    },12000);



}




setInterval(
createFloatingPetal,
1200
);






// ==========================================
// CONTINUE FINAL BUTTON
// ==========================================


document
.getElementById(
"continueButton"
)
.addEventListener(
"click",
()=>{


    console.log(
    "Final chapter next ❤️"
    );

    window.location.href="final.html";

});




console.log(
"Flower story loaded 🌸"
);