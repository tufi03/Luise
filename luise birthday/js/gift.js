const gift = document.getElementById("gift");

const particles = [

"💖","💕","💗","💞","💝",
"✨","⭐","🌸",

"🐰","🐱","🐻","🐼","🐹","🦊","🐥"

];

gift.addEventListener("click",()=>{

if(gift.classList.contains("open")) return;

gift.classList.add("open");

setTimeout(()=>{

for(let i=0;i<250;i++){

spawnParticle();

}

},350);

setTimeout(()=>{

// Change this later
// window.location.href="letter.html";

},4200);

});

function spawnParticle(){

const p=document.createElement("div");

p.className="particle";

p.textContent=
particles[Math.floor(Math.random()*particles.length)];

const rect=gift.getBoundingClientRect();

p.style.left=(rect.left+110)+"px";
p.style.top=(rect.top+120)+"px";

const size=18+Math.random()*22;

p.style.fontSize=size+"px";

const angle=Math.random()*Math.PI*2;
const distance=250+Math.random()*450;

const x=Math.cos(angle)*distance;
const y=Math.sin(angle)*distance;

p.style.setProperty("--x",x+"px");
p.style.setProperty("--y",y+"px");

p.style.animationDuration=
2+Math.random()*2+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},4000);

}