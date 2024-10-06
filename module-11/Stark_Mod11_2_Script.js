// Starting the event listeners
document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("addButton").addEventListener("click", addToArray);
    document.getElementById("deleteButton").addEventListener("click", deleteItem);
    document.getElementById("displayButton").addEventListener("click", displayList);
});

toDoList = [];

function addToArray(){
    userInput = document.getElementById("userInput").value
    if (userInput == ""){
        alert("Item Failed to add to list as the input is blank")
    } else {
        alert( userInput + " was added to the list at index "+ toDoList.length)
        toDoList.push(userInput);
        document.getElementById("userInput").value = "";
    }
};

function deleteItem(){
    toDoList.pop()
    displayList()
};

function displayList(){
    document.getElementById("listDisplay").innerHTML = "";
    for (let item = 0; item < toDoList.length; item++) {
        document.getElementById("listDisplay").innerHTML += '<p>Item ' + (item+1) + ': ' + toDoList[item] + ' </p>'
    }
};