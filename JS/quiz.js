
console.log("QuizifyX JavaScript loaded!");

const Darkmodetoggle = document.getElementById("toggle");
const body = document.body;
Darkmodetoggle.addEventListener("change",function(){
    if(Darkmodetoggle.checked){
        console.log("It is on ");
        body.classList.add("dark-mode");
    }
    else{
        console.log("It is off");
        body.classList.remove("dark-mode");
    }
});