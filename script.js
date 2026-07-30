const music = document.getElementById("music");


const landing = document.getElementById("landing");

const question = document.getElementById("question");

const letter = document.getElementById("letter");


const envelope = document.getElementById("envelope");


const yesBtn = document.getElementById("yes-btn");

const noBtn = document.getElementById("no-btn");


const letterText = document.getElementById("letter-text");




// ==========================
// PAGE 1 - OPEN ENVELOPE
// ==========================


envelope.onclick = () => {


    landing.classList.remove("active");


    question.classList.add("active");


};







// ==========================
// RUN AWAY BUTTON
// ==========================


function moveNoButton(){


    const x =
    Math.random() *
    (window.innerWidth - noBtn.offsetWidth);


    const y =
    Math.random() *
    (window.innerHeight - noBtn.offsetHeight);



    noBtn.style.position="fixed";


    noBtn.style.left=x+"px";


    noBtn.style.top=y+"px";


}




noBtn.addEventListener(
"mouseenter",
moveNoButton
);



noBtn.addEventListener(
"touchstart",
moveNoButton
);








// ==========================
// PAGE 2 - YES BUTTON
// ==========================


yesBtn.onclick = async () => {



    // Start music ONLY here ❤️


    music.volume = 0.5;


    try{


        await music.play();


    }

    catch(error){


        console.log(
        "Music error:",
        error
        );


    }






    question.classList.remove("active");


    letter.classList.add("active");



    createHearts();



    startLetter();



};









// ==========================
// FLOATING HEARTS
// ==========================


function createHearts(){


    const hearts = [

        "❤️",
        "💗",
        "💕",
        "💖",
        "💘"

    ];



    for(let i=0; i<35; i++){


        const heart =
        document.createElement("span");



        heart.className =
        "floating-heart";



        heart.innerHTML =
        hearts[
        Math.floor(Math.random()*hearts.length)
        ];



        heart.style.left =
        Math.random()*100 + "vw";



        heart.style.animationDuration =
        (6 + Math.random()*10) + "s";



        heart.style.animationDelay =
        Math.random()*5 + "s";



        heart.style.fontSize =
        (15 + Math.random()*35) + "px";



        letter.appendChild(heart);


    }


}









// ==========================
// LOVE LETTER
// ==========================


const message = `

Bangaram,

Every day I miss you a little more.

I miss your smile.

I miss your laugh.

I miss hearing your voice.


Thank you for always being my safe place.

Thank you for choosing me.

Thank you for loving me.


I promise to keep loving you every single day.


As I always say...


We're one day closer to getting married. 💍


I cannot wait until I can finally hold your hand,

hug you tightly,

and never have to say "I miss you"

through a screen again.


I love you more than yesterday,

but less than tomorrow.


Forever yours ❤️

`;




let letterIndex = 0;




function startLetter(){


    letterText.innerHTML = "";


    letterIndex = 0;


    setTimeout(typeWriter,1500);


}







function typeWriter(){


    if(letterIndex < message.length){


        letterText.innerHTML +=
        message.charAt(letterIndex);



        letterIndex++;



        setTimeout(
            typeWriter,
            35
        );


    }


}
