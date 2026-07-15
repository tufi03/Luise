// ==========================================
// OUR STORY - INTERACTIVE FLOWER 🌸
// ==========================================


// ==========================================
// STORY DATA
// Change these later with your own memories ❤️
// ==========================================


const memories = [

    {
        title: "The day we met",

        text:
        "I do not know how is it possible to fall for someone this hard on the first date, BUT I DID!!!"
    },


    {
        title: "Getting Closer",

        text:
        "Our talks, calls just felt natural; i cannot explain how but everything felt so meant to be."
    },


    {
        title: "the day i realized i fell for you",

        text:
        "remember when I popped up in front of your door unannounced, that was the day I knew I fell for you."
    },


    {
        title: "Our Memories",

        text:
        " genuinly every moment i spend with you feels like a dear memory that i want to hold tightly onto."
    },


    {
        title: "Today",

        text:
        "Idk if you already knew but I have a big crush on you, consider this my confession"
    },


    {
        title: "The Future",

        text:
        "I'm so excited for all the memories we're gonna make together my Love"
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

    window.location.href="joke.html";

});




console.log(
"Flower story loaded 🌸"
);