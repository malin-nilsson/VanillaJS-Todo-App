// Create class for Todo objects
class Todo {
    constructor(todo, status) {
        this.todo = todo;
        this.isDone = status;
    }
}

// Create Todo objects
let myItem1 = new Todo("Finish JS assignment", false);
let myItem2 = new Todo("Get groceries", false);
let myItem3 = new Todo("Meditate", false);
let myItem4 = new Todo("Call Mom", false);
let myItems = [myItem1, myItem2, myItem3, myItem4];

window.onload = function () {

    createHTMLforTodo()

    let addbutton = document.getElementById("add-btn"); // Grab the button 
    addbutton.addEventListener("click", addNewTodo); // Add an event listener to the button

}

// Create HTML for todo
function createHTMLforTodo() {
    let container = document.getElementById("list-container");
    container.innerHTML = "";
    let ul = document.createElement("ul");
    ul.setAttribute("id", "list");
    container.appendChild(ul);

    let finishedUL = document.createElement("ul");
    finishedUL.classList.add("finished-ul")
    container.appendChild(finishedUL);

    let heading = document.createElement("h3");
    heading.innerHTML = "Finished todos:"
    ul.after(heading);
    
    for (let i = 0; i < myItems.length; i++) {
        let li = document.createElement("li");
        li.textContent = myItems[i].todo;

        if (myItems[i].isDone) {
            finishedUL.appendChild(li);
            li.classList.add("finished");
            
        } else {
            ul.appendChild(li);
        }

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        li.appendChild(checkbox);

        checkbox.addEventListener("change", () => {
            markTodoAsDone(myItems[i])
        });
    }
}

// Function to hide to-dos
function markTodoAsDone(objectToMarkAsDone) {
    objectToMarkAsDone.isDone = true;
    createHTMLforTodo();
}

function addNewTodo() {
    let newTodoItem = document.createElement("li");
    let input = document.getElementById("input").value;
    newTodoItem.innerHTML = input;

    let container = document.getElementById("list-container");
    let ul = document.createElement("ul");
    ul.setAttribute("id", "list");
    container.appendChild(ul);

    ul.insertBefore(newTodoItem, ul.childNodes[0]);

    let newCheckbox = document.createElement("input")
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("checkbox", "newcheckbox");
    newTodoItem.appendChild(newCheckbox);

    let newTodo = new Todo(newTodoItem.textContent, false);
    myItems.push(newTodo);
    console.log(myItems)

}







// function remove(position) {
//     myItems.splice(position, 1);
//     console.log(myItems)

// }



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