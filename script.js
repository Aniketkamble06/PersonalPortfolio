/*--------------------------------------------------------multiple name automatic display----------------------------*/
var typed = new Typed(".auto-type", {
    strings: ["Student", "Programmer", "Web Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



var typed = new Typed(".auto-type-2", {
    strings: ["Student", "Programmer", "Web Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



/*--------------------------------------------about section tab links Skills & Education ---------------------------------------------------- */

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



/*----------------------------------------------Menu-bars --------------------------------------------------------------------------------- */



var sidemenu = document.getElementById("sidemenu");


function openmenu() {

    sidemenu.style.right = "0";

}


function closemenu() {

    sidemenu.style.right = "-205px";

}




/*------------------------------Message display google sheet------------------------------------------*/




const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ6AsHh8XpmdUCSCtG0KQpeB7HX2_MUOshlLx1XtHF7_Vyfp3oDVPfPnKkBVz7RPjGUg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfuly..."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()


        })
        .catch(error => console.error('Error!', error.message))
})













/*-----------------------------------Popup image display------------------*/
















































