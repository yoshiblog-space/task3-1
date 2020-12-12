'use strict';

{
   
  document.getElementById('btn').addEventListener('click',() =>{
    const tbody=document.querySelector('tbody');
    const todoComment = document.getElementById('comment');
    const stateButton= document.createElement('button');
    stateButton.textContent='作業中';
    const delButton = document.createElement('button');
    delButton.textContent ='削除';
   
    const todoList =[tbody.rows.length,todoComment.value,stateButton,delButton];

    const tr =document.createElement('tr');

    for(let i = 0 ; i < todoList.length ; i ++){
    
        const td = document.createElement('td');

        if(i >= todoList.length- 2){
          td.appendChild(todoList[i]);
          tr.appendChild(td);
        }else{
          td.textContent = todoList[i];
          tr.appendChild(td);
        }

    }

      tbody.appendChild(tr);
    });


}