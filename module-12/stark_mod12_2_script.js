favBooks = [
    "Lord of the Rings: Return of the King",
    "Lord of the Rings: Fellowship of the Ring",
    "Lord of the Rings: The two Towers",
    "The Hobbit",
    "Halo: Contact Harvest",
    "Chronicles of Narnia: The Lion the Which and the Wardrobe",
    "Harry Potter and the sorcerers stone",
    "Fifth Wing",
    "Mistborn",
    "Halo: First Strike"
];

for (let book = 0; book < favBooks.length; book++) {
    document.getElementById("favList").innerHTML += '<li>' + favBooks[book] + ' </li>'
}

function topToBottom(){
    document.getElementById("favList").removeAttribute("reversed");
    document.getElementById("favList").innerHTML = "";
    for (let book = 0; book < favBooks.length; book++) {
        document.getElementById("favList").innerHTML += '<li>' + favBooks[book] + ' </li>'
    }
}

function bottomToTop(){
    document.getElementById("favList").setAttribute("reversed", true);
    document.getElementById("favList").innerHTML = "";
    for (let book = favBooks.length; book > 0; book--) {
        document.getElementById("favList").innerHTML += '<li>' + favBooks[book-1] + ' </li>'
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("topToBottom").addEventListener("click", topToBottom);
    document.getElementById("bottomToTop").addEventListener("click", bottomToTop);
});