
// Creating a list to add guess to.
selection = [];

// Starting the event listeners
document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("reset").addEventListener("click", resetGame);

// Creating listener for each image
    for (idNum = 1; idNum < 9; idNum++){
        document.getElementById(idNum.toString()).addEventListener("click", getImage(idNum));
    }
})

// Resets the game back to the start.
function resetGame(){
    for (idNum = 1; idNum < 9; idNum++){
        document.getElementById(idNum.toString()).src = "./images/backOfCard.png";
    }
    selection = []
}

// Takes the image event and then uses an antonymous function to check how many images have been attempted.
function getImage(id){
    return function() {
        if (selection.length < 2){
            if (selection.length == 0){
                assignImage(id);
                selection.push(id);
                console.log("Starting List")
            } else {
                assignImage(id);
                selection.push(id);
                console.log("Adding to list")
            }
        } else {
            checkMatch(selection[0], selection[1])
            console.log("Selection is full resetting")
            assignImage(id);
            selection.pop();
            selection.pop();
            selection.push(id);
        }
    }
}

// Assigning the right image to the right spot
function assignImage(id){
    if (id == 1){
        document.getElementById(id.toString()).src = "./images/cow.png";
    } else if (id == 2){
        document.getElementById(id.toString()).src = "./images/monkey.png";
    } else if (id == 3){
        document.getElementById(id.toString()).src = "./images/cow.png";
    } else if (id == 4){
        document.getElementById(id.toString()).src = "./images/pig.png";
    } else if (id == 5){
        document.getElementById(id.toString()).src = "./images/tiger.png";
    } else if (id == 6){
        document.getElementById(id.toString()).src = "./images/pig.png";
    } else if (id == 7){
        document.getElementById(id.toString()).src = "./images/monkey.png";
    } else if (id == 8){
        document.getElementById(id.toString()).src = "./images/tiger.png";
    } else {
        console.log("Error occurred out of image range")
    }
}

// Checking if the images match and then running the appropriate function.
function checkMatch(idOne, idTwo){
    if (idOne == 1){
        if (idTwo == 3) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else if (idOne == 2){
        if (idTwo == 7) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else if (idOne == 3){
        if (idTwo == 1) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else if (idOne == 4){
        if (idTwo == 6) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else if (idOne == 5){
        if (idTwo == 8) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else if (idOne == 6){
        if (idTwo == 4) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else if (idOne == 7){
        if (idTwo == 2) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else if (idOne == 8){
        if (idTwo == 5) {
            match(idOne, idTwo);
        } else {
            dontMatch(idOne, idTwo);
        }
    } else {
        console.log("Error occurred unsure of index")
    }
}

// Turning the image blank after a correct guess.
function match(idOne, idTwo){
    document.getElementById(idOne.toString()).removeEventListener("click", getImage)
    document.getElementById(idTwo.toString()).removeEventListener("click", getImage)
    document.getElementById(idOne.toString()).src = "";
    document.getElementById(idTwo.toString()).src = "";
}

// Returning the images back to the default view after an incorrect guess.
function dontMatch(idOne, idTwo){
    document.getElementById(idOne.toString()).src = "./images/backOfCard.png";
    document.getElementById(idTwo.toString()).src = "./images/backOfCard.png";
}
