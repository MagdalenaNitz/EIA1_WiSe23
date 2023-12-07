let myVariable = true;

console.log (myVariable)

let myMovie = prompt ("Welchen Film möchtest du schauen? 'The Marvels' (a) oder 'Die Tribute von Panem' (b)?");

console.log (myMovie)

if (myMovie == "a" || myMovie == "b" ) {
    let snackChoice = prompt ("Gute Wahl. Fehlt nur noch der passende Snack. Süßes oder salziges Popcorn?");

    if (snackChoice == "süßes") {
        let snackAnswer = prompt ("Du hast süßes Popcorn gewählt. Das hätte ich auch gemacht. Genieße den Film!");
    }
    else if (snackChoice == "salziges") {
        let snackAnswer = prompt ("Wirklich?! Du hast salziges Popcorn gewählt. Das schmeckt doch nicht. Genieße trotzdem den Film!");
    }
    else {
        prompt (" Keine korrekte Eingabe. Wähle 'süßes' oder 'salziges'")
    }
    }

else {
    prompt ("Keine korrekte Eingabe. Wähle a oder b.")
    }