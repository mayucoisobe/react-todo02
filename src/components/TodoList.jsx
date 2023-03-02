import { useState } from 'react';

function TodoList() {
  const initailState = [
    {
      task: 'Learn vue.js',
      isCompleted: false,
    },
    {
      task: 'Learn React Hook',
      isCompleted: true,
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initailState);
  const [task, setTask] = useState('aaaa');

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') return;
    // 以下はスプレット構文を使用したいため、(todos) => [...todos] としている
    // スプレット構文使用しない場合は、() => {task, isCompleted:false} でOK！！
    // {task} は {task:task} の省略形
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
  };

  // const handelRemoveTask = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  //   console.log(todos);
  // };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos].filter(
      (todo, todoIndex) => todoIndex !== index
    );
    setTodos(newTodos);
  };

  const handleUpdateTask = () => {
    console.log('犬');
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        Add Task:
        <input
          value={task}
          placeholder="Add New Task"
          onChange={handleNewTask}
        />
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={
                todo.isCompleted === true
                  ? {
                      textDecorationLine: 'line-through',
                    }
                  : {}
              }
            >
              {todo.task}
              {/* <span onClick={() => handleRemoveTask(index)}>X</span> */}
              <span onClick={() => handleUpdateTask(index)}>X</span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
