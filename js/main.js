// Create class for Todo objects
class Todo {
    constructor(input, status) {
        this.input = input;
        this.isDone = status;
    }
}

// Create Todo objects
let myItem1 = new Todo("Finish JS assignment", false);
let myItem2 = new Todo("Go grocery shopping", false);
let myItem3 = new Todo("Meditate", false);
let myItem4 = new Todo("Call Mom", false);
let myItems = [myItem1, myItem2, myItem3, myItem4];
let myItemsStatus = [myItem1.status, myItem2.status, myItem3.status, myItem4.status]
let myItemsInput = [myItem1.input, myItem2.input, myItem3.input, myItem4.input]

let doneItems = []
console.log("my items: " + myItemsInput)

window.onload = function () {

    // Create UL and append it to div container
    let ul = document.createElement("ul");
    ul.setAttribute("id", "list");
    let container = document.getElementById("list-container");
    container.appendChild(ul);

    // Create HTML for Todo objects
    for (i = 0; i < myItemsInput.length; i++) {
        let li = document.createElement("li");
        li.textContent = myItemsInput[i]
        ul.appendChild(li);
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        li.appendChild(checkbox);
    }

    // Add event listeners to checkboxes to hide checkbox when it's clicked
    let check = document.getElementsByClassName("check");
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener("click", hideTodos)
    }

    // Function to hide to-dos
    function hideTodos(e) {
        let text = e.target.parentElement.textContent;
        let parent = this.parentElement;
        parent.style.display = "none";
        doneItems.push(text); // push items to doneItems array
        console.log("Done Items: " + doneItems);
    }

    // Create heading for finished todos
    let heading = document.createElement("h3");
    heading.classList.add("heading");
    heading.innerHTML = "Finished items:";
    ul.appendChild(heading);

    // Function to check off todo and add to "Finished todos"
    function checkOffFromList() {
        let checkBox = document.getElementsByClassName("check");
        for (let i = 0; i < checkBox.length; i++) {
            checkBox[i].addEventListener("click", () => {
                if (checkBox[i].checked) {
                    myItems[i].isDone = true; //set status to true if to-do is done
                    let newtext = myItems[i].input; // grab input from to-do item

                    // Create HTML for finished to-dos
                    let doneItem = document.createElement("li");
                    doneItem.textContent = newtext;
                    doneItem.classList.add("finished")
                    ul.appendChild(doneItem);
                    let doneSpan = document.createElement("span");
                    doneSpan.classList.add("add-back");
                    doneItem.appendChild(doneSpan);
                    let checkbox = document.createElement("input")
                    checkbox.type = "checkbox";
                    checkbox.classList.add("checkbox", "newcheckbox");
                    checkbox.setAttribute("checked", "checked");
                    doneItem.appendChild(checkbox);
                }
                console.log(myItems)
                // remove(i);
            });
        }
    }
    checkOffFromList()


    function addBackTodo() {
      
        }

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