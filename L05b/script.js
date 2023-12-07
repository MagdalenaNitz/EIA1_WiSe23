let myArray = ["Welchen Film möchtest du schauen? 'The Marvels' (a) oder 'Die Tribute von Panem' (b)?",
               "Gute Wahl. Fehlt nur noch der passende Snack. Süßes oder salziges Popcorn?",
               "Keine korrekte Eingabe. Wähle a oder b.",
               "Du hast süßes Popcorn gewählt. Das hätte ich auch gemacht. Genieße den Film!",
               "Wirklich?! Du hast salziges Popcorn gewählt. Das schmeckt doch nicht. Genieße trotzdem den Film!",
               " Keine korrekte Eingabe. Wähle 'süßes' oder 'salziges'"
              ]
function promptersatz (story) {
    return prompt (story)
}

let myMovie = promptersatz (myArray [0]);

console.log (myMovie)

if (myMovie == "a" || myMovie == "b" ) {
    let snackChoice = prompt (myArray [1]);

    if (snackChoice == "süßes") {
        let snackAnswer = prompt (myArray [3]);
    }
    else if (snackChoice == "salziges") {
        let snackAnswer = prompt (myArray [4]);
    }
    else {
        prompt (myArray [5])
    }
    }

else {
    prompt (myArray [2])
    }

function price  ( Film, Popcorn) {
    let price = Film + Popcorn;
    return price;
}
console.log ("price: " + price (10, 5)+ " Euro");

