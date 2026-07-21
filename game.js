let lines = [];
let currentLine = 0;

const output = document.getElementById("output");


function loadGame() {

    let game = document.getElementById("gameSelect").value;

    fetch("scripts/" + game)
        .then(response => response.text())
        .then(text => {

            lines = text.split("\n");
            currentLine = 0;

            output.textContent = "Ready.\nPress NEXT.";

        });

}


function nextLine() {

    if (currentLine < lines.length) {

        output.textContent += "\n\n" + lines[currentLine];

        currentLine++;

    }

}


document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        nextLine();
    }

});
