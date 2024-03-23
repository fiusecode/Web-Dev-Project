
let rn = Math.floor(Math.random() * 100) + 1;
let number = document.getElementById("number");
number.innerText = rn;

let userInput = document.getElementById("inputNumber");
let checkButton = document.getElementById("checkNumber");
let showStatus = document.getElementById("ans");

async function GuessNumber() {
    if (userInput.value == "") {
        await show();
        showStatus.innerText = "Input Required!";
        await unShow();
        console.log('requered')
    }
    else if (userInput.value == rn) {
        number.style = "filter:blur(0px); border: 2px solid green";
        number.style.animation = 'none';
        showStatus.style = "display: flex; background-color:green;";
        showStatus.innerText = "Correct Guess";
        console.log("guesed right");

    }
    else {
        await show();
        if (userInput.value > rn) {
            showStatus.innerText = "Greater than the orignal number";
        }
        else {
            showStatus.innerText = "Lesser than the orignal number";
        }
        showStatus.style.backgroundColor = "red";
        await unShow();

        console.log("guesed Wrong right")
    }



}

let show = async () => {
    setTimeout(() => {
        showStatus.style = "display: flex;";
    }, 1);
}
let unShow = async () => {
    setTimeout(() => {
        showStatus.style = "display: none;";
    }, 1000);
}

