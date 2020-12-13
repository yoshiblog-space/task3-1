'use strict';

{
  const todos = [];

  function displayTodo(todos) {
    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');  
    const td2 = document.createElement('td');
    const stateButton = document.createElement('button');
    const delButton = document.createElement('button');
    delButton.textContent = '削除';

    todos.forEach((todo,i) => {
      td1.textContent = i;
      td2.textContent = todo.task;
      stateButton.textContent = todo.status;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(stateButton);
      tr.appendChild(delButton);
      tbody.appendChild(tr);
    });

  }


  document.getElementById('btn').addEventListener('click',() => {
    const todoComment = document.getElementById('comment');
    const todo = {
                  task: todoComment.value,
                  status: '作業中'
                };
  
    todos.push(todo);
    
    displayTodo(todos);

    });


}