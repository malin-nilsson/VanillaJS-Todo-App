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
    addbutton.addEventListener("click", addNewTodo); // Add an event listener to listen for clicks
}

// Create HTML for todo
function createHTMLforTodo() {
    let container = document.getElementById("list-container"); // Grab container 
    container.innerHTML = ""; // Set it to empty
    let ul = document.createElement("ul"); // Create a UL to hold the list items
    ul.setAttribute("id", "list"); // Add an ID to the UL
    container.appendChild(ul); // Append the UL to the container

    let finishedUL = document.createElement("ul"); // Create UL for finished todos
    finishedUL.classList.add("finished-list") // Add a class to the UL
    container.appendChild(finishedUL); // Append the UL to the container

    let heading = document.createElement("h3"); // Create an H3
    heading.innerHTML = "Finished todos:" // Add text to H3
    ul.after(heading); // Append it after the UL

    // Loop through myItems list and create LI:s for todos
    for (let i = 0; i < myItems.length; i++) {
        let li = document.createElement("li");
        li.textContent = myItems[i].todo;

        let checkbox = document.createElement("input") // Create an input element
        checkbox.type = "checkbox"; // Make it into a checkbox
        checkbox.classList.add("check"); // Add class to the checkbox
        li.appendChild(checkbox); // And append it to the LI

        // Add event listeners checkboxes
        checkbox.addEventListener("change", () => {
            markTodoAsDone(myItems[i]) // If checkbox is clicked, run this function
        });

        // If todo is marked as done, append it to UL
        if (myItems[i].isDone) {
            finishedUL.appendChild(li); // Append LI to UL
            li.classList.add("finished"); // Add a class
            checkbox.setAttribute("checked", "checked"); // Set the checkbox to be checked
        } else {
            ul.appendChild(li);
        }
    }
}

// Function to check off todos
function markTodoAsDone(objectToMarkAsDone) {
    objectToMarkAsDone.isDone = true; // Mark todo as done
    createHTMLforTodo(); // Create new HTML
}

// Function to add new todos
function addNewTodo() {
    let input = document.getElementById("input").value; // Grab the text from the input element
    let newTodo = new Todo(input, false);   // Create new Todo object
    myItems.push(newTodo);  // Push new Todo object into the list
    createHTMLforTodo();    // Create new HTML for todos
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