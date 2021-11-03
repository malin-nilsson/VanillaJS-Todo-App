window.onload = function() {
    addRemoveButton()
    deleteListItem()
    lineThrough()
}

// Funktion som lägger till delete-knapp på varje listelement
function addRemoveButton() {
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
            let div = this.parentElement;
            div.style.display = "none";
        });
    }
}

// Funktion som stryker igenom text vid klick
function lineThrough() {
let list = document.querySelector("ul");
list.addEventListener("click", toggleFunction)
}

// Funktion som växlar mellan vanlig text och genomstrukten text
function toggleFunction(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
};