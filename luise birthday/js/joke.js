// ==========================================
// ELEMENTS
// ==========================================

const dialogue =
document.getElementById("dialogue");


const character =
document.getElementById("character");


const proposal =
document.getElementById("proposal");


const proposalText =
document.getElementById("proposalText");


const ring =
document.getElementById("ring");


const choices =
document.getElementById("choices");


const yesButton =
document.getElementById("yesButton");


const noButton =
document.getElementById("noButton");


const wedding =
document.getElementById("wedding");

const continueButton =
document.getElementById("continueButton");


// ==========================================
// DIALOGUE SYSTEM
// ==========================================


const lines = [

    "hey... do you hear that? 👀",

    "hmm... I wonder what it is...",

    "wait... someone is coming..."

];


let lineIndex = 0;



function showDialogue(){


    if(lineIndex >= lines.length){


        character.style.display="block";

        return;

    }


    dialogue.classList.remove("show");


    setTimeout(()=>{


        dialogue.textContent =
        lines[lineIndex];


        dialogue.classList.add("show");


        lineIndex++;


        setTimeout(showDialogue,3000);


    },500);



}



character.style.display="none";


showDialogue();





// ==========================================
// CHARACTER CLICK
// ==========================================


character.addEventListener("click",()=>{


    character.classList.add("zoom");


    setTimeout(()=>{


        character.style.display="none";


        dialogue.classList.remove("show");


        proposal.style.display="flex";


        startProposal();


    },1500);



});






// ==========================================
// PROPOSAL
// ==========================================


function startProposal(){


    setTimeout(()=>{


        proposalText.textContent =
        "so... I wanted to ask you something, mausi";


    },1000);



    setTimeout(()=>{


        proposalText.textContent =
        "LUISE... WILL YOU HAVE A COW WITH ME? 💍";


        ring.style.display="block";


        choices.style.display="flex";


    },3500);



}





// ==========================================
// NO BUTTON
// ==========================================


noButton.addEventListener("click",()=>{


    proposalText.textContent =
    "nice try 😌";


    const x =
    Math.random()*200-100;


    const y =
    Math.random()*200-100;


    ring.style.transform =
    `translate(${x}px,${y}px)`;



    setTimeout(()=>{


        proposalText.textContent =
        "LUISE... WILL YOU HAVE A COW WITH ME? 💍";


    },1000);



});






// ==========================================
// YES BUTTON
// ==========================================


yesButton.addEventListener("click",()=>{


    proposal.style.display="none";


    wedding.style.display="flex";


    createFlowers();


});






// ==========================================
// FLOWERS
// ==========================================


function createFlowers(){


    for(let i=0;i<50;i++){


        const flower =
        document.createElement("div");


        flower.innerHTML="🌸";


        flower.style.position="absolute";


        flower.style.left =
        Math.random()*100+"vw";


        flower.style.top="-50px";


        flower.style.fontSize =
        (20+Math.random()*30)+"px";


        flower.style.animation =
        "fall 5s linear";



        document.body.appendChild(flower);



        setTimeout(()=>{

            flower.remove();

        },5000);


    }


}

continueButton.addEventListener("click",()=>{


    window.location.href =
    "final.html";


});

// flower animation

const style =
document.createElement("style");


style.innerHTML=`

@keyframes fall{

from{

transform:
translateY(-50px)
rotate(0deg);

}


to{

transform:
translateY(110vh)
rotate(360deg);

}

}

`;


document.head.appendChild(style);