stories =  ["Welchen Film möchtest du schauen? 'The Marvels' (a) oder 'Die Tribute von Panem' (b)?",
            "Gute Wahl. Fehlt nur noch der passende Snack. Süßes oder salziges Popcorn?",
            "Keine korrekte Eingabe. Wähle a oder b.",
            "Du hast süßes Popcorn gewählt. Das hätte ich auch gemacht. Genieße den Film!",
            "Wirklich?! Du hast salziges Popcorn gewählt. Das schmeckt doch nicht. Genieße trotzdem den Film!",
            " Keine korrekte Eingabe. Wähle 'süßes' oder 'salziges'"
    ] 
let state = 0;

function promptersatz (story) {
    return prompt (story)
}

let myMovie = promptersatz (stories [0]);

console.log (myMovie)

const input = document.querySelector (".inputForm__field")
const output = document.getElementById ("output");

input.addEventListener ("keydown", function (event){
   if (event.key == "Enter") {
    if (state == 0) {
        // asking about the movie
        if (input.value == "a" || input.value == "b") {
            output.innerHTML = stories [1];
            state = 1; //move to the next state for asking about the snack
        } 
    else { prompt
        output.innerHTML = stories [2];
    }
} 
    else if (state == 1) {
        // asking about the snack
     if (input.value == "Süßes" || input.value == "süßes") {
        output.innerHTML = stories [3];
    }
    else if (input.value == "Salziges" || input.value == "salziges") { 
        output.innerHTML = stories [4];
    }
    else { prompt
        output.innerHTML = stories [5];
    }
}
   }
});    
    
function price  ( Film, Popcorn) {
    let price = Film + Popcorn;
    return price;
}
console.log ("price: " + price (10, 5)+ " Euro");
 

