let div = document.getElementById("time");
let updatetime = () => {
    setInterval(() => {
        let time = new Date;
        const sec = String(time.getSeconds()).padStart(2, "0");
        const hour = String(time.getHours()).padStart(2, "0");
        const min = String(time.getMinutes()).padStart(2, "0");

        div.innerText = `${hour}:${min}:${sec}`;
        div.style.border = "2px solid #fff";

    }, 1000)
}
updatetime();

// let str = "10";
// str = str.padStart(2, "0")
// console.log(str);
