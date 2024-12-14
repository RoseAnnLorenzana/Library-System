let bookCounter = 1;

function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();

    if (title === "" || author === "") {
        alert("Please enter both title and author.");
        return;
    }

    const bookList = document.getElementById("bookList");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${bookCounter++}</td>
        <td>${title}</td>
        <td>${author}</td>
        <td><button onclick="deleteBook(this)">Delete</button></td>
    `;

    bookList.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
}

function deleteBook(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
