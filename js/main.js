window.onload = function() {
    removeButton()
    deleteListItem()

    let addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", addListItem);

    let list = document.querySelector("ul");
    list.addEventListener("click", toggleFunction);
}

// Funktion som lägger/tar bort nya list-element
function addListItem() {
    let newToDo = document.createElement("li");
    let input = document.getElementById("input").value;
    newToDo.innerHTML = input;

    if (input === "") {
        alert("You forgot to write something!")
    } else {
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "remove";
        span.appendChild(txt);
        newToDo.appendChild(span);
        list.appendChild(newToDo);
    }
    deleteListItem();
}

// Funktion som lägger till delete-knapp på varje listelement
function removeButton() {
    let listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "remove";
        span.appendChild(txt);
        listItems[i].appendChild(span);
    }
}

// Funktion som tar bort listelement vid klick
function deleteListItem() {
    let remove = document.getElementsByClassName("remove");
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", function () {
            let parent = this.parentElement;
            parent.style.display = "none";
        });
    }
}


// Funktion som växlar mellan vanlig text och genomstrukten text
function toggleFunction(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
};