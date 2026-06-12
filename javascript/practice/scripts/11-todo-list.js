let todoList = [];

displayTodos();

function addTodo() {
    // retrieve the name of the task from the input
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    // retrieve the due date from the input
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    // put task and date into the array
    todoList.push({
        name,
        dueDate
    });


    // reset the textbox
    inputElement.value = '';

    displayTodos();
}

function displayTodos() {
    let todoListHTML = '';

    // loop through the todo list entries
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;   // deconstructing - gets both variables

        // put each todo list entry into a paragraph 
        const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                    todoList.splice(${i}, 1);
                    displayTodos();
                " class="delete-todo-button">Delete</button>
            `;  // this technique is called 'generating the HTML'

        // combine all the paragraphs
        todoListHTML += html;
    }

    document.querySelector('.js-todo-container')
        .innerHTML = todoListHTML;
}