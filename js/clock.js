let isim = prompt("Adınızı giriniz")
let benimIsmim = document.querySelector("#myName")
myName.innerHTML = `${isim}`


let tarih = new Date();

let day = tarih.getDay();

switch(day){
    case 1 :
        day = "Pazartesi";
    case 2 :
        day = "Salı";
    case 3 :
        day = "Çarsamba";
    case 4 :
        day = "Persembe";
    case 5 :
        day = "Cuma";
    case 6 :
        day = "Cumartesi";
    case 7 :
        day = "Pazar";
}

let saat = document.querySelector("#myClock")
myClock.innerHTML = `${ tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()}  ${day} `