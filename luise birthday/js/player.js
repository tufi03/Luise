// ==========================================
// ELEMENTS
// ==========================================

const toggle = document.getElementById("toggle");

const panel = document.getElementById("panel");

const playButton = document.getElementById("play");

const forwardButton = document.getElementById("forward");

const backButton = document.getElementById("back");

const disc = document.getElementById("disc");

const songTitle = document.getElementById("songTitle");


// ==========================================
// SONG LIST
// ==========================================

const songs = [

    "music/song1.mp3",
    "music/song2.mp3",
    "music/song3.mp3",
    "music/song4.mp3",
    "music/song5.mp3",
    "music/song6.mp3"

];


// ==========================================
// PAGE SONG SETTINGS
// ==========================================

let currentSong =
(typeof pageSong !== "undefined")
? pageSong
: 0;


// ==========================================
// AUDIO
// ==========================================

const audio = new Audio(
    songs[currentSong]
);


let playing = false;


// ==========================================
// UPDATE SONG TITLE
// ==========================================

function updateSongTitle(){

    if(songTitle){

        songTitle.textContent =
        "Song " + (currentSong + 1) ;

    }

}


// ==========================================
// DISC ANIMATION
// ==========================================

function startDisc(){

    if(disc){

        disc.style.animationPlayState = "running";

    }

}


function stopDisc(){

    if(disc){

        disc.style.animationPlayState = "paused";

    }

}


// ==========================================
// INITIAL LOAD
// ==========================================

updateSongTitle();

stopDisc();


// ==========================================
// OPEN PLAYER
// ==========================================

if(toggle && panel){

    toggle.addEventListener("click",()=>{

        panel.classList.toggle("open");

    });

}


// ==========================================
// PLAY / PAUSE
// ==========================================

if(playButton){

    playButton.addEventListener("click",()=>{


        if(playing){


            audio.pause();

            playButton.textContent = "▶";

            stopDisc();

            playing = false;


        }else{


            audio.play();

            playButton.textContent = "⏸";

            startDisc();

            playing = true;


        }


    });

}


// ==========================================
// CHANGE SONG
// ==========================================

function changeSong(){


    audio.pause();


    audio.src =
    songs[currentSong];


    audio.load();


    audio.play();


    playing = true;


    if(playButton){

        playButton.textContent = "⏸";

    }


    updateSongTitle();

    startDisc();


}


// ==========================================
// NEXT SONG
// ==========================================

if(forwardButton){

    forwardButton.addEventListener("click",()=>{


        currentSong++;


        if(currentSong >= songs.length){

            currentSong = 0;

        }


        changeSong();


    });

}


// ==========================================
// PREVIOUS SONG
// ==========================================

if(backButton){

    backButton.addEventListener("click",()=>{


        currentSong--;


        if(currentSong < 0){

            currentSong = songs.length - 1;

        }


        changeSong();


    });

}


// ==========================================
// AUTO NEXT SONG
// ==========================================

audio.addEventListener("ended",()=>{


    currentSong++;


    if(currentSong >= songs.length){

        currentSong = 0;

    }


    changeSong();


});


// ==========================================
// PAGE AUTOPLAY
// ==========================================

if(
typeof autoPlaySong !== "undefined" &&
autoPlaySong
){

    audio.play()
    .then(()=>{


        playing = true;


        if(playButton){

            playButton.textContent = "⏸";

        }


        startDisc();


    })
    .catch(()=>{


        console.log(
        "Autoplay blocked by browser"
        );


    });

}