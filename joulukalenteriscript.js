const paiva = new Date();
const modaali = document.getElementById("modaali");
const nappi = document.getElementsByClassName("nappi");
const span = document.getElementsByClassName("sulje");

function avaaLuukku(button) {

    //otetaan avattavan luukun napin tekstikentästä päivän numero päivämäärään

    const paivaNumero = Number(button.textContent);
    const luukkuPaiva = new Date(2024, 11, paivaNumero);
    const modaalifakta = document.getElementById("modaalifakta");
    const modaalikuva = document.getElementById("modaalikuva");

// verrataan, onko luukun päivä pienempi tai sama kuin kuluva päivä

    if (luukkuPaiva <= paiva) {

        // sijoitetaan luukussa sijaitseva fakta ja kuva modaaliin 
        modaalifakta.innerHTML = button.nextElementSibling.textContent;
        modaalikuva.setAttribute("src", button.previousElementSibling.src);
    
    }
    else {
        // teksti, joka näytetään jos ei ole vielä kuluva päivä
        modaalifakta.innerHTML = "Odota vielä hetki, joulupukki on vasta lentokentällä.";
        modaalikuva.setAttribute("src", "");
    }
    //vaihdetaan modaali näkyväksi
    modaali.style.display = "block";

}

function tarkistaPaiva() {

    const napit = document.getElementsByClassName("nappi");

    for (let i = 0; i < napit.length; i++) {
        if (new Date(2024, 11, (Number(napit[i].textContent))) <= paiva) {
            napit[i].previousElementSibling.style.visibility = "visible";
        }
    }


}

tarkistaPaiva();

// span-elementti modaalissa sulkee modaalin 

function suljeLuukku() {
    modaali.style.display = "none";
}

