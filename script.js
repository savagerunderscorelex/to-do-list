var submitButton = document.getElementById("submit-button");
var testy = document.getElementById("add-new");
var newElement = document.createElement("p");
var form = document.getElementById("new-task-form");
var input = document.getElementById("text-input");
newElement.innerHTML = "hello this is example";
form.addEventListener("submit", addNewTask);
newElement.innerHTML = "hi"; ;

function addNewTask(){
    // var newElement = document.createElement("p");
    
    // testy.insertAdjacentElement("afterend", newElement);
    testy.after(newElement);
};
