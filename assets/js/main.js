// Snack 1
// Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
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

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let lighterBike = racingBikes[0];
for (let i = 0; i < racingBikes.length; i++) {
    const bike = racingBikes[i];
    if (bike.weight < lighterBike.weight) {
        lighterBike = bike;
    }
}
console.log(lighterBike);
document.getElementById('bike').innerHTML = ` Il nome della bici più leggera è: ${lighterBike.name} e il suo peso è: ${lighterBike.weight} `

/* let {name: n, weight: w} = racingBikes;
var min = w[0];
for (let i = 0; i < racingBikes.length; i++) {
if (racingBikes[i]< min ) {
min = racingBikes[i];
console.log('Setting min to ' + min);
}
}
document.getElementById('bike').innerHTML = 
`
<>The lightest bike is called ${n}</><br>
<span>The lightest bike weighs ${w}</span>
` */

/* var min = [];
for (let i = 0; i < racingBikes.length; i++) {
    var {racingBikes}= racingBikes[i];
    if (racingBikes[i] < min) {
        min = racingBikes[i];
        console.log('Setting min to ' + min);
    }
    
} */
// Prova 1
/* var min = racingBikes[0];
var max = racingBikes[racingBikes.length - 1]
racingBikes.sort(function(min, max){
    return min.cost - max.cost
}); */
// Prova 2
/* let lightestBike = 0;
for(var i = 0; i < racingBikes.length; i++){
    var {weight} = racingBikes[i].weight;
    if(weight < lightestBike) {
        lightestBike = weight;
    }
} */
// Prova 3
/* let lightestBike = racingBikes[0];
for (let i = 0; i < racingBikes.length; i++) {
    let weight = racingBikes[i];
    if (lightestBike.weight > racingBikes.length){
        lightestBike = racingBikes[i];
    }
} */

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
let teams = [
    {
        nome: 'Manchester United',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Manchester City',
        puntiFatti: 0,
        falliSubiti: 0,
    },{
        nome: 'Chelsea',
        puntiFatti: 0,
        falliSubiti: 0,
    },{
        nome: 'Liverpool',
        puntiFatti: 0,
        falliSubiti: 0,
    },{
        nome: 'Arsenal',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Tottenham',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Leicester',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
var teamsArray = [];

for (let i = 0; i < teams.length; i++) {
    var team = teams[i];
    var {nome, falliSubiti} = teams[i];
    teamsArray.push({nome, falliSubiti});
}
console.log(teamsArray);

/* document.getElementById('soccer').innerHTML = `Le squadre sono ${teams.nome} e i loro falli subiti sono: ${teams.falliSubiti}`;
 */






