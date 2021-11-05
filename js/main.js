class Todo {
    constructor(input, status) {
        this.input = input;
        this.status = status;
    }
}

let myItem1 = new Todo("Finish JS assignment", false);
let myItem2 = new Todo("Go grocery shopping", false);
let myItem3 = new Todo("Meditate", false);
let myItem4 = new Todo("Call Mom", false);
let myItems = [myItem1, myItem2, myItem3, myItem4];
let myItemsStatus = [myItem1.status, myItem2.status, myItem3.status, myItem4.status]
let myItemsInput = [myItem1.input, myItem2.input, myItem3.input, myItem4.input]

let doneItems = []

console.log(myItems)

window.onload = function () {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "list");

    let container = document.getElementById("list-container");
    container.appendChild(ul);

    for (i = 0; i < myItemsInput.length; i++) {
        let li = document.createElement("li");
        li.textContent = myItemsInput[i]
        ul.appendChild(li);
        let span = document.createElement("span");
        span.classList.add("remove");
        li.appendChild(span);
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.classList.add("check")
        li.appendChild(checkbox);
    }

    let checkboxElems = document.getElementsByClassName("check");

    for (var i = 0; i < checkboxElems.length; i++) {
        checkboxElems[i].addEventListener("change", toggleFunction);
    }

    function toggleFunction(e) {
        let text = e.target.parentElement.textContent;
        if (e.target.className === "check") {
            e.target.parentElement.classList.toggle("checked");
            doneItems.push(text);
            console.log("Done Items: " + doneItems)
        }
    };

    function remove(position) {
        myItems.splice(position, 1);
        console.log(myItems);
        let remove = document.getElementsByClassName("remove");
        for (let i = 0; i < remove.length; i++) {
            remove[i].addEventListener("click", function () {
                let parent = this.parentElement;
                parent.style.display = "none";
            });
        }
    }

    for (let i = 0; i < myItems.length; i++) {
        let removebutton = document.getElementsByClassName("remove");
        removebutton[i].addEventListener("click", () => {
            remove(i);
        });
    }
}




// funktion för att testa local storage
// function testLocalStorage() {
//     let todo = document.querySelectorAll("li");
//     let todos = [];

//     for (let i = 0; i < todo.length; i++) {
//         todos.push(todo[i].textContent);
//     }
//     console.log("To-dos from testLocalStorage function: " + todos)

//     let todoArrayAsText = JSON.stringify(todos);
//     localStorage.setItem("Todos", todoArrayAsText);
//     console.log("To-do array as text" + todoArrayAsText)

//     let todoArrayFromLocalStorage = localStorage.getItem("Todos");

//     let todoArrayAsObject = JSON.parse(todoArrayFromLocalStorage);
//     console.log("To-do array as object: " + todoArrayAsObject)
// }