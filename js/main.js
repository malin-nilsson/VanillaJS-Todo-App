// Create class for Todo objects
class Todo {
    constructor(todo, status) {
        this.todo = todo;
        this.isDone = status;
    }
}

// Create Todo objects
let myTodo1 = new Todo("Finish the assignment", false);
let myTodo2 = new Todo("Meditate", false);
let myTodo3 = new Todo("Bake cake", false);
let myTodo4 = new Todo("Call Mom", false);
let myTodos = [myTodo1, myTodo2, myTodo3, myTodo4];

window.onload = function () {
    createHTMLforTodo()
    let addbutton = document.getElementById("add-btn"); // Grab the button 
    addbutton.addEventListener("click", addNewTodo); // Add an event listener to listen for clicks
}

// Create HTML for todo
function createHTMLforTodo() {

    // Container
    let container = document.getElementById("list-container"); // Grab container 
    container.innerHTML = ""; // Set it to empty

    // Container for "Items" title and sort button
    let headingContainer = document.createElement("div"); // Create container for subheading
    headingContainer.classList.add("heading-container"); // Add class to subheading


    // "Items" title
    let h2 = document.createElement("h2"); // Create an H2
    h2.innerHTML = "Items"; // Set the HTML
    container.appendChild(headingContainer); // Append the container
    headingContainer.appendChild(h2); // Append the H2

    // Sort button
    let select = document.createElement("select"); // Create select element
    select.id = "sort-btn"; // Add an id to select element
    headingContainer.appendChild(select); // Append select element to container
    let sortOption = document.createElement("option"); // Create an opion element
    sortOption.selected = true; // Set selected to true
    sortOption.innerHTML = "Sort"; // Add inner HTML
    let sortAlphabetically = document.createElement("option"); // Create another option element
    sortAlphabetically.innerHTML = "Alphabetically"; // Add inner HTML
    select.appendChild(sortOption); // Append option to select element
    select.appendChild(sortAlphabetically); // Append option to select element
    sortAlphabetically.addEventListener("click", () => { // Add event listener to select element
        sortTodosAlphabetically() // If select element is clicked, this function is called
    });

    // UL
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
            let removeIcon = document.createElement("span"); // Create span from remove icon
            removeIcon.classList.add("remove-icon"); // Add a class to the remove icon
            removeIcon.setAttribute("title", "Delete"); // Set a title attribute to the remove icon
            li.appendChild(removeIcon); // Append remove icon to the LI
            removeIcon.addEventListener("click", () => { // Add event listeners to remove icons
                deleteTodo(myTodos[i]); // If remove icon is clicked, call this function
            })
            addBackIcon.addEventListener("click", () => { // Add event listeners to  add back button
                markTodoAsNotDone(myTodos[i]); // If add back button is clicked, call this function
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

// Add new todos
function addNewTodo(e) {
    e.preventDefault();
    let input = document.getElementById("input").value.trim(); // Grab the text from the input element
    if (input === "") { // If the input field is empty....
        alert("You forgot to write something!") // Create an alert
    } else { // If not,
        let newTodo = new Todo(input, false, new Date()); // Create new Todo object
        myTodos.push(newTodo); // Push new Todo object into the list
        createHTMLforTodo(); // Create new HTML for todos
    }
}

// Add todos back to list
function markTodoAsNotDone(objectToMarkAsNotDone) {
    objectToMarkAsNotDone.isDone = false; // Mark todo as done
    createHTMLforTodo(); // Create new HTML
}

// Delete object entirely using splice
function deleteTodo(objectToDelete) {
    let objectIndex = myTodos.indexOf(objectToDelete); // Find index on object to remove
    myTodos.splice(objectIndex, 1); // Use splice to remove object
    createHTMLforTodo() // ..and create new HTML
}

// Sort todo items alphabetically
function sortTodosAlphabetically() {
    myTodos.sort((a, b) => {
        let todoa = a.todo.toLowerCase(), // Convert todos to lowercase
            todob = b.todo.toLowerCase(); // Convert todos to lowercase

        if (todoa < todob) {
            return -1;
        }
        if (todoa > todob) {
            return 1;
        }
        return 0;
    });
    createHTMLforTodo();
}
