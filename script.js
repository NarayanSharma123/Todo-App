setInterval(() => {
    const now = new Date();
    const date = now.toDateString(); // Example: "Fri May 30 2025"
    const time = now.toLocaleTimeString();
    document.querySelector(".date").innerText = `Date: ${date} | Time: ${time}`;
},1000);

const todoBtn = document.querySelector("button");
todoBtn.addEventListener("click", () => {
    const todoBox = document.querySelector(".todo-input").value.trim();
    const cardBody = document.querySelector(".card-body");

    if (todoBox === "") {
        alert("Your Box Is Empty");
    } else {
        const todoList = document.createElement("div");
        todoList.classList.add("todo-item"); // Optional: for styling

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add("checkbox");

        const label = document.createElement("span");
        label.classList.add("label");
        label.textContent = todoBox;

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-times");

        todoList.appendChild(checkBox);
        todoList.appendChild(label);
        todoList.appendChild(deleteIcon);
        cardBody.appendChild(todoList);

        // Clear the input field
        document.querySelector(".todo-input").value = "";

        // Remove List
        deleteIcon.addEventListener("click", () => {
            todoList.remove();
        });

        // checkbox
        checkBox.addEventListener("click", () => {
            if(checkBox.checked) {
                label.style.textDecoration = "line-through";
                label.style.color = "#aaaaaa";
            } else {
                label.style.textDecoration = "none";
                label.style.color = "#000000";
            }
        });
    }
});
