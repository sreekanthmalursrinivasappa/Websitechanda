const yesBtn = document.getElementById("yes-btn");

const noBtn = document.getElementById("no-btn");



yesBtn.onclick = () => {


    sessionStorage.setItem(
        "fromQuestionPage",
        "true"
    );


    window.location.href = "letter.html";


};





function moveButton(){


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
moveButton
);


noBtn.addEventListener(
"touchstart",
moveButton
);