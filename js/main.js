// Create class for Todo objects
class Todo {
    constructor(todo, status) {
        this.todo = todo;
        this.isDone = status;
    }
}

// Create Todo objects
let myTodo1 = new Todo("Finish JS assignment", false);
let myTodo2 = new Todo("Get groceries", false);
let myTodo3 = new Todo("Meditate", false);
let myTodo4 = new Todo("Call Mom", false);
let myTodos = [myTodo1, myTodo2, myTodo3, myTodo4];

window.onload = function () {
    createHTMLforTodo()
    let addbutton = document.getElementById("add-btn"); // Grab the button 
    addbutton.addEventListener("click", addNewTodo); // Add an event listener to listen for clicks
    
}

// Create HTML for todo
function createHTMLforTodo() {
    let container = document.getElementById("list-container"); // Grab container 
    container.innerHTML = ""; // Set it to empty
    let headingContainer = document.createElement("div"); // Create container for subheading
    headingContainer.classList.add("heading-container"); // Add class to subheading
    let h2 = document.createElement("h2"); // Create an H2
    h2.innerHTML = "Items";    // Set the HTML
    container.appendChild(headingContainer);    // Append the container
    headingContainer.appendChild(h2);  // Append the H2
    let ul = document.createElement("ul"); // Create a UL to hold the list items
    ul.setAttribute("id", "list"); // Add an ID to the UL
    container.appendChild(ul); // Append the UL to the container
    let finishedUL = document.createElement("ul"); // Create UL for finished todos
    finishedUL.classList.add("finished-list") // Add a class to the UL
    container.appendChild(finishedUL); // Append the UL to the container
    let subheading = document.createElement("h3"); // Create an H3
    subheading.innerHTML = "Completed:" // Add text to H3
    ul.after(subheading); // Append it after the UL


    // Loop through myTodos list and create LI:s for todos
    for (let i = 0; i < myTodos.length; i++) {
        let li = document.createElement("li");
        li.textContent = myTodos[i].todo;

        let checkbox = document.createElement("input") // Create an input element
        checkbox.type = "checkbox"; // Make it into a checkbox
        checkbox.classList.add("check"); // Add class to the checkbox
        checkbox.setAttribute("title", "Mark as done"); // Add title attribute to checkboxes that shows a text on hover
        li.appendChild(checkbox); // And append it to the LI

        // Add event listeners to checkboxes
        checkbox.addEventListener("change", () => {
            markTodoAsDone(myTodos[i]) // If checkbox is clicked, run this function
        });

        // If todo is marked as done, append it to UL
        if (myTodos[i].isDone) {
            finishedUL.appendChild(li); // Append LI to UL
            li.classList.add("finished"); // Add a class
            let addBackIcon = document.createElement("span"); // Create a span for add back button
            addBackIcon.classList.add("add-back-icon"); // Add a class to add back button
            addBackIcon.setAttribute("title", "Add back"); // Add title attribute to checkboxes that shows a text on hover
            li.appendChild(addBackIcon) // Append the button the the LI
            checkbox.remove(); // Remove the checkbox
            let removeIcon = document.createElement("span");
            removeIcon.classList.add("remove-icon")
            li.appendChild(removeIcon);
            addBackIcon.addEventListener("click", () => {  // Add event listeners to  add back button
                markTodoAsNotDone(myTodos[i]);  // If add back button is clicked, call this function
            })
        } else {
            ul.appendChild(li);
        }
    }
}

// Mark todo as done and then create new HTML
function markTodoAsDone(objectToMarkAsDone) {
    objectToMarkAsDone.isDone = true; // Mark todo as done
    createHTMLforTodo(); // Create new HTML
}

// Function to add new todos
function addNewTodo(e) {
    e.preventDefault();
    let input = document.getElementById("input").value.trim(); // Grab the text from the input element
    if (input === "") { // If the input field is empty....
        alert("You forgot to write something!") // Create an alert
    } else { // If not,
        let newTodo = new Todo(input, false); // Create new Todo object
        myTodos.push(newTodo); // Push new Todo object into the list
        createHTMLforTodo(); // Create new HTML for todos
    }
}

// Function to add todos back to list
function markTodoAsNotDone(objectToMarkAsDone) {
    objectToMarkAsDone.isDone = false; // Mark todo as done
    createHTMLforTodo(); // Create new HTML
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