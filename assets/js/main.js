// Snack 1
// Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const racingBikes = [
    {
        name: "Serious Valparola",
        weight: 10.88
    },

    {
        name: "Felt FR Advanced Disc",
        weight: 7.73
    },

    {
        name: "Ridley Fenix C Disc",
        weight: 9.14
    },

    {
        name: "Votec VRC Pro Disc",
        weight: 8.4
    }
];

let lightestBike = racingBikes[0];
for (let i = 0; i < racingBikes.length; i++) {
    let weight = racingBikes[i];
    if (lightestBike.weight > racingBikes.length){
        lightestBike = racingBikes[i];
    }
}
document.getElementById('bike')
.innerHTML = 
`
<span>The lightest bike is called ${lightestBike.name}</span><br>
<span>The lightest bike weighs ${lightestBike.weight}</span>
`

/* var min = racingBikes[0];
var max = racingBikes[racingBikes.length - 1]
racingBikes.sort(function(min, max){
    return min.cost - max.cost
}); */
/* let lightestBike = 0;
for(var i = 0; i < racingBikes.length; i++){
    var {weight} = racingBikes[i].weight;
    if(weight < lightestBike) {
        lightestBike = weight;
    }
} */

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
