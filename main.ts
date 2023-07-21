// main.ts

// Define the TodoItem interface
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// Get the app container element
const appContainer = document.getElementById('app');

// Create the todo list
const todoList: TodoItem[] = [];

// Render the todo list
function renderTodoList() {
  // Clear the app container
  appContainer.innerHTML = '';

  // Create the todo list container
  const todoListContainer = document.createElement('div');
  todoListContainer.classList.add('todo-list');

  // Create the todo items
  todoList.forEach((item) => {
    // Create the todo item container
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item');

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
    });

    // Create the label
    const label = document.createElement('label');
    label.textContent = item.task;

    // Append the checkbox and label to the todo item container
    todoItemContainer.appendChild(checkbox);
    todoItemContainer.appendChild(label);

    // Append the todo item container to the todo list container
    todoListContainer.appendChild(todoItemContainer);
  });

  // Append the todo list container to the app container
  appContainer.appendChild(todoListContainer);
}

// Add a new todo item
function addTodoItem(task: string) {
  const newTodoItem: TodoItem = {
    id: todoList.length + 1,
    task: task,
    completed: false
  };

  todoList.push(newTodoItem);
  renderTodoList();
}

// Initialize the app
function initApp() {
  // Render the initial todo list
  renderTodoList();

  // Get the form element
  const form = document.getElementById('todo-form');

  // Add event listener to the form submit event
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the input value
    const input = document.getElementById('todo-input') as HTMLInputElement;
    const task = input.value.trim();

    // Add the todo item
    if (task !== '') {
      addTodoItem(task);
      input.value = '';
    }
  });
}

// Call the initApp function when the DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

