async function getData(scr) {
    let x = await fetch(scr);
    let data = x.json();
    return data;
}

let jokeText = document.getElementById("jokeText");

let jokeType = document.getElementById("subcategory");


let api = `https://v2.jokeapi.dev/joke/Any`;

jokeType.addEventListener("input", (e) => {

    console.log(jokeType.value);
    api = `https://v2.jokeapi.dev/joke/${jokeType.value}`;
})

async function main() {
    let data = await getData(api);

    if (data.type == "twopart") {
        console.log(data);
        jokeText.innerText = data.setup + "\n";
        setTimeout(()=>{
            jokeText.innerText += data.delivery;
        },3000);
    }
    else if (data.type == "single") {
        jokeText.innerText = data.joke;
    }
}
