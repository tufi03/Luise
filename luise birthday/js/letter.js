// ==========================================
// LETTER PAGE SCRIPT
// ==========================================


// Elements

const envelope = document.getElementById("envelope");
const letterScene = document.getElementById("letterScene");
const blurOverlay = document.getElementById("blurOverlay");

const messages = document.querySelectorAll(
    "#dialogue .message"
);

const peekMessages = document.querySelectorAll(
    "#peekDialogue .message"
);

const envelopeScene =
document.getElementById("envelopeScene");


// ==========================================
// DIALOGUE SYSTEM
// ==========================================


let currentMessage = 0;


function showNextMessage(){

    messages.forEach(msg=>{
        msg.classList.remove("active");
    });


    if(currentMessage < messages.length){

        messages[currentMessage]
        .classList.add("active");

        currentMessage++;

    }

}



setTimeout(showNextMessage,2500);
setTimeout(showNextMessage,5000);
setTimeout(showNextMessage,7500);



// ==========================================
// BACKGROUND CREATURES
// ==========================================


const animals = [

"🐰",
"🐱",
"🐻",
"🐼",
"🦊",
"🐹",
"🐥"

];


const flowers = [

"🌸",
"🌷",
"🌺",
"🌼"

];


const sparkles = [

"✨",
"⭐",
"💖"

];



function createFloatingItem(){

    const item =
    document.createElement("div");


    const type =
    Math.random();


    if(type < .6){

        item.innerHTML =
        animals[
        Math.floor(Math.random()*animals.length)
        ];

        item.className="animal";

    }

    else if(type < .8){

        item.innerHTML =
        flowers[
        Math.floor(Math.random()*flowers.length)
        ];

        item.className="animal";

    }

    else{

        item.innerHTML =
        sparkles[
        Math.floor(Math.random()*sparkles.length)
        ];

        item.className="animal";

    }



    item.style.left =
    Math.random()*90+"%";


    item.style.top =
    Math.random()*90+"%";


    item.style.animationDuration =
    (10+Math.random()*15)+"s";


    document
    .getElementById("animalLayer")
    .appendChild(item);



    setTimeout(()=>{

        item.remove();

    },25000);


}



setInterval(
    createFloatingItem,
    1200
);



// ==========================================
// OPEN ENVELOPE
// ==========================================


let envelopeOpened=false;


envelope.addEventListener(
"click",
()=>{


if(envelopeOpened)
return;


envelopeOpened=true;



// open flap

envelope.classList.add("open");



// little vibration on phone

if(navigator.vibrate){

    navigator.vibrate(80);

}



// change dialogue

setTimeout(()=>{

    document
    .getElementById("dialogue")
    .style.opacity=0;



    document
    .getElementById("peekScene")
    .style.display="block";


    playPeekDialogue();



},1200);



});




// ==========================================
// SECOND DIALOGUE
// ==========================================


function playPeekDialogue(){


let index=0;



function next(){

    peekMessages.forEach(msg=>{

        msg.style.display="none";

    });



    if(index < peekMessages.length){


        peekMessages[index]
        .style.display="block";


        index++;


        setTimeout(
        next,
        2500
        );


    }


    else{


        enableLetterClick();


    }



}


next();



}




// ==========================================
// CLICK PAPER INSIDE
// ==========================================


function enableLetterClick(){


envelope.addEventListener(
"click",
openFullLetter
);


}


function openFullLetter(){


blurOverlay.classList.add("active");


// hide text before showing paper
document.getElementById("letterBody").style.visibility="hidden";


setTimeout(()=>{

    letterScene.classList.add("show");


},500);



setTimeout(()=>{


    document
    .getElementById("letterBody")
    .style.visibility="visible";


    startLetterWriting();


},2200);



}



// ==========================================
// LETTER WRITING EFFECT
// ==========================================

function startLetterWriting(){

    const paragraphs =
    document.querySelectorAll("#letterBody p");


    paragraphs.forEach((p,index)=>{


        const text = p.textContent.trim();


        p.textContent = "";


        setTimeout(()=>{


            let i = 0;


            const typing = setInterval(()=>{


                if(i < text.length){

                    p.textContent += text.charAt(i);

                    i++;

                }
                else{

                    clearInterval(typing);

                }


            },60);



        }, index * 2500);


    });

}
// ==========================================
// COWS
// ==========================================


function createCow(){


const cow =
document.createElement("div");


cow.className="cow";

cow.innerHTML="🐄";

cow.style.top =
Math.random()*70+"%";


cow.style.animationDuration =
(18+Math.random()*20)+"s";


document
.getElementById("cowLayer")
.appendChild(cow);



setTimeout(()=>{

cow.remove();

},40000);



}



setInterval(
createCow,
9000
);




// ==========================================
// BUTTERFLIES
// ==========================================


function createButterfly(){


const butterfly =
document.createElement("div");


butterfly.className="animal";

butterfly.innerHTML="🦋";


butterfly.style.left =
Math.random()*100+"%";


butterfly.style.top =
Math.random()*100+"%";


document
.getElementById("butterflyLayer")
.appendChild(butterfly);



setTimeout(()=>{

butterfly.remove();

},20000);



}



setInterval(
createButterfly,
7000
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
(8+Math.random()*8)+"s";


document
.getElementById("petalLayer")
.appendChild(petal);



setTimeout(()=>{

petal.remove();

},15000);


}


setInterval(
createPetal,
1500
);



// ==========================================
// START
// ==========================================


console.log(
"Letter scene loaded ❤️"
);