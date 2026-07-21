let lines = [];
let currentLine = 0;

const output = document.getElementById("output");
const fileInput = document.getElementById("fileInput");


fileInput.addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {

        lines = e.target.result.split("\n");
        currentLine = 0;

        output.textContent = "Ready.\nPress NEXT to begin.";

    };

    reader.readAsText(file);

});


function nextLine() {

    if (currentLine < lines.length) {

        output.textContent += "\n\n" + lines[currentLine];

        currentLine++;

        window.scrollTo(0, document.body.scrollHeight);

    } else {

        output.textContent += "\n\n--- END OF GAME ---";

    }

}


// Press Enter to advance
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        nextLine();
    }

});