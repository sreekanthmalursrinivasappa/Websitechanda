const yesBtn = document.getElementById("yes-btn");

const noBtn = document.getElementById("no-btn");



yesBtn.onclick = () => {


    // remember that user interacted

    sessionStorage.setItem(
        "musicUnlocked",
        "true"
    );


    window.location.href="letter.html";


};





function escapeButton(){


    const width =
    window.innerWidth - noBtn.offsetWidth - 20;


    const height =
    window.innerHeight - noBtn.offsetHeight - 20;



    noBtn.style.position="fixed";


    noBtn.style.left =
    Math.random()*width+"px";


    noBtn.style.top =
    Math.random()*height+"px";


}



noBtn.addEventListener(
"mouseenter",
escapeButton
);



noBtn.addEventListener(
"touchstart",
escapeButton
);
