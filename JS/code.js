console.log('Welcome');

const TodoInput = document.querySelector('.todo-input');
const TodoBtn = document.querySelector('.todo-btn');
const TodoResult = document.querySelector('.todo-result');

function addTodo(e) {
    e.preventDefault();
    console.log(TodoInput.value);

    const todoLi = document.createElement('li');
    todoLi.classList.add('my-2');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = TodoInput.value;
    TodoInput.value = '';
    todoTitle.classList.add('d-inline-block', 'me-5');

    const TodoAction = document.createElement('div');
    TodoAction.classList.add('d-inline-block', 'float-end');

    const btnComplete = document.createElement('button');
    btnComplete.classList.add('btn', 'btn-outline-primary');
    btnComplete.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    TodoAction.appendChild(btnComplete);

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn', 'btn-outline-warning');
    btnDelete.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    TodoAction.appendChild(btnDelete);

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btn', 'btn-outline-info');
    btnEdit.innerHTML = '<i class="fa-solid fa-keyboard"></i>';
    TodoAction.appendChild(btnEdit);

    todoLi.appendChild(todoTitle);
    TodoResult.appendChild(todoLi);
    todoLi.appendChild(TodoAction);
}

function todoToggle(e) {
    const item = e.target;
    console.log(item.className);

    if (item.classList.contains('fa-check')) {
        console.log('Completed');
        const taskLi =item.parentElement.parentElement.parentElement
        taskLi.childNodes[0].classList.toggle('Completed')


    } else if (item.classList.contains('fa-trash-can')) {
        console.log('Delete');
        const taskLi =item.parentElement.parentElement.parentElement.classList.add('Delete')

    } else if (item.classList.contains('fa-keyboard')) {
        console.log('Edit');

    }
}

TodoBtn.addEventListener('click', addTodo);
TodoResult.addEventListener('click', todoToggle);



