document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const daySelect = document.getElementById('day-select');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const todoList = document.getElementById('todo-list');

    // Carregar tarefas salvas do localStorage
    loadTodos();
    // Adicionar nova tarefa
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTask = todoInput.value.trim();
        const selectedDay = daySelect.value;
        const selectedDate = dateInput.value;
        const selectedTime = timeInput.value;

        if (newTask !== '') {
            addTodoItem(newTask, selectedDay, selectedDate, selectedTime);
            saveTodos();
             // Limpar o campo de entrada
            todoInput.value = '';
             // Limpar o campo de data
            dateInput.value = '';
             // Limpar o campo de hora
            timeInput.value = '';
        }
    });
    // Função para adicionar uma tarefa à lista
    function addTodoItem(task, day, date, time, completed = false) {
        const li = document.createElement('li');        
        // Div para a informação da tarefa (texto, dia, data e hora)
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
        taskInfo.innerHTML = `${task} - <strong>${day}</strong> - <em>${date}</em> - <time>${time}</time>`;
        // Se a tarefa estiver concluída, adiciona a classe 'completed'
        if (completed) {
            li.classList.add('completed');
        }
        // Criar botão de completar tarefa
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTodos();
        });
        // Criar botão de deletar tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTodos();
        });
        // Adiciona a div com o texto e os botões ao li
        li.appendChild(taskInfo);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
    // Função para salvar todas as tarefas no localStorage
    function saveTodos() {
        const todos = [];
        document.querySelectorAll('#todo-list li').forEach(li => {
             // Extrai o texto da tarefa
            const text = li.childNodes[0].textContent.split(' - ')[0];
             // Extrai o dia da semana
            const day = li.querySelector('strong').textContent;
             // Extrai a data
            const date = li.querySelector('em').textContent;
             // Extrai a hora
            const time = li.querySelector('time').textContent;
            const completed = li.classList.contains('completed');

            todos.push({ text, day, date, time, completed });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    // Função para carregar tarefas do localStorage
    function loadTodos() {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        savedTodos.forEach(todo => {
            addTodoItem(todo.text, todo.day, todo.date, todo.time, todo.completed);
        });
    }
});