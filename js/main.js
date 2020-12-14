'use strict';

{
  const todos = [];
  const tbody = document.getElementById('tbody');


  function displayTodo(todos) {
    
    while (tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }

    todos.forEach((todo,i) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');  
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 =  document.createElement('td');
      const stateButton = document.createElement('button');
      const delButton = document.createElement('button');

      
      td1.textContent = i;
      td2.textContent = todo.task;
      stateButton.textContent = todo.status;
      delButton.textContent = '削除';
      tr.appendChild(td1);
      tr.appendChild(td2);
      td3.appendChild(stateButton);
      td4.appendChild(delButton);
      tr.appendChild(td3);
      tr.appendChild(td4);
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