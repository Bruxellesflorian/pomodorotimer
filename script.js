const body = document.body
// const fentreOption = document.querySelector(".ABSOLUTE")
// const listChoix = [{titre:"Nombre de tour ",class:"a1"},{titre:"Timer ",class:"a2"},{titre:"short-break ",class:"a3"},{titre:"long-break ",class:"a4"},
// ]
// const tableO = document.createElement("table")
// fentreOption.appendChild(tableO)
// for (let elem of listChoix){
//     const tr = document.createElement("tr")
//     tr.innerHTML = elem.titre
//     fentreOption.appendChild(tr)

//     const td = document.createElement("td")
//     tr.appendChild(td)
//     const select = document.createElement("select")
//     select.classList.add(elem.class)
//     td.appendChild(select)
//     for(let i = 1; i<30;i++){
//         const opt = document.createElement("option")
//         opt.innerHTML = i
//         select.appendChild(opt)
//     }

// }
//______________
//temps Principale
const timerPrincipale = document.querySelector("#timerPrincipale")
const petitTimerPrincipale = document.querySelector("#petitTimerPrincipale")

let sec = 0
let min = 0
let petitSec = 60
let petitMin = 24
//______________
let tour = 0
const tourAffiche = document.querySelector("#tour")
//______________
//temps deux
const timerDeux = document.querySelector("#timerDeux")
let sec2 = 60
let min2 = 4
//______________
//temps trois
const timerDeFin = document.querySelector("#fin")
let sec3 = 60
let min3 = 14

let lance_timer;

const start_button = document.querySelector("#start")
const pause_button = document.querySelector("#pause")
const reset_button = document.querySelector("#reset")

let bolStart = true
const button = document.body.addEventListener("click", function (e) {
    if (e.target == start_button) {
        console.log("start");
        if (bolStart === true) {
            bolStart = false
            timer()
        }
    }
    if (e.target == pause_button) {
        console.log("pause");
        clearInterval(lance_timer)
        bolStart = true
    }
    if (e.target == reset_button) {
        console.log("reset");
        clearInterval(lance_timer)
        resetLeTemp()
        bolStart = true
    }
})
let bearkPrincipal = true;
let bolShortBreak = false;

function timer() {
    lance_timer = setInterval(() => {
        
        if(tour < 4){
        if (bearkPrincipal === true) { 
            sec++
            petitSec--
            if (sec == 60) {
                sec = 0
                petitSec = 60
                min++
                petitMin--
                if (min >= 60) {
                    min = 0
                    petitMin = 0
                }
            }
            petitTimerPrincipale.innerHTML = afficheTemp(petitMin) + ":" + afficheTemp(petitSec)
            timerPrincipale.innerHTML = afficheTemp(min) + ":" + afficheTemp(sec)
        }
        if (min == 25) {
            bearkPrincipal = false
            resetLeTemp()
            console.log("go");
            tour++
            tourAffiche.innerHTML = tour
            bolShortBreak = true
            timerDeux.innerHTML = afficheTemp(min2) + ":" + afficheTemp(sec2)
            petitTimerPrincipale.innerHTML = afficheTemp(petitMin+1) + ":00"
        }
        if (bolShortBreak === true) {
            if(min2 == 0){
                bearkPrincipal=true
                bolShortBreak= false
                sec2 = 60
                min2 = 4
            }
            sec2--
            if(sec2 == 0){
                sec2 = 60
                min2--
            }
            timerDeux.innerHTML = afficheTemp(min2) + ":" + afficheTemp(sec2)
        }
        if(bolShortBreak === false){
            timerDeux.innerHTML = afficheTemp(min2+1) + ":" + "00"
        }
    }

    if(tour == 4){
        timerDeux.innerHTML = afficheTemp(min2+1) + ":" + "00"
        if(min3 == 0){
            clearInterval(lance_timer)
            timerDeFin.innerHTML = "time's up"
            tour++
        }
        else{
            sec3--
            if(sec3 == 0){
                sec3 = 60
                min3--
            }
            timerDeFin.innerHTML = afficheTemp(min3) + ":" + afficheTemp(sec3)
        }
    }
    
    }, 0,1);
}

function afficheTemp(ValeurTime) {
    if (ValeurTime < 10) {
        return "0" + ValeurTime
    } else {
        return ValeurTime
    }
}

function resetLeTemp() { //temps Principale
    tour = 0
    sec = 0
    min = 0
    petitSec = 60
    petitMin = 24
    sec2 = 60
    min2 = 4
    sec3 = 60
    min3 = 14

    timerPrincipale.innerHTML = afficheTemp(min) + ":00" 
    petitTimerPrincipale.innerHTML = afficheTemp(petitMin+1) + ":00"
    timerDeux.innerHTML = afficheTemp(min2+1) + ":00"
    timerDeFin.innerHTML = afficheTemp(min3+1) + ":00" 
}

function deroulementPlus(Sec, Min) {
    if (Sec == 60) {
        Sec = 0
        Min++
        if (Min >= 60) {
            Min = 0
        }
    }
}
function deroulementMoin(SecM, MinP) {
    if (SecM == 0) {
        SecM = 60
        MinP--
        if (MinP == 0) {
            MinP = 60
        }
    }
}