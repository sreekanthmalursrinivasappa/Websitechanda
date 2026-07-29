const music = document.getElementById("music");



async function startMusic(){


    if(
        sessionStorage.getItem("musicUnlocked")
        ===
        "true"
    ){


        music.volume = 0.5;



        try{


            await music.play();



            console.log(
            "Music playing ❤️"
            );



        }
        catch(error){


            console.log(
            "Autoplay blocked",
            error
            );


        }



    }



}





window.addEventListener(
"load",
startMusic
);








const message = `

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





const output =
document.getElementById("letter-text");


let index=0;



setTimeout(()=>{


typeWriter();


},2000);






function typeWriter(){


if(index < message.length){


output.innerHTML +=
message.charAt(index);



index++;



setTimeout(
typeWriter,
35
);



}


}
