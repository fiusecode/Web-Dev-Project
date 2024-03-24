//initialization
let task = document.getElementById("task");
let sec2 = document.getElementById("sec-2");

function addtask() {
    if (task.value != "") {
        let boxHtml = `<div class="added-task flex">
        <input type="text" name="at"  class="add-task-input" disabled>
        <span class="btn flex"></span>
        </div>`;

        
        let div = document.createElement("div");
        div.innerHTML = boxHtml;
        sec2.append(div);
        div.firstElementChild.firstElementChild.value = task.value;
        task.value = "";
        
        let edit = document.createElement("button");
        edit.innerHTML = "Edit";
        edit.style.backgroundColor = "blue";
        edit.onclick = function () {
            edit.parentNode.parentNode.firstElementChild.toggleAttribute("disabled");
        }
        div.firstElementChild.children[1].append(edit);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.onclick = function () {
            deleteBtn.parentNode.parentNode.parentNode.parentNode.removeChild(div);
        }
        div.firstElementChild.children[1].append(deleteBtn);


    }
}