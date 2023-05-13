import React, { useState, useEffect } from "react";
import "../css/Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [sorting, setSorting] = useState("sequential");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => {
        setTodos(response);
      });
  }, []);

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  const sortedTodos = todos.sort((a, b) => {
    switch (sorting) {
      case "sequential":
        return a.id - b.id;
      case "completed":
        return a.completed - b.completed;
      case "alphabetical":
        return a.title.localeCompare(b.title);
      case "random":
        return Math.random() - 0.5;
      default:
        return 0;
    }
  });

  function handleCheckBoxChange(todo_id) {
    let copy_list = [];
    for (let e of todos) {
      copy_list.push({ ...e });
    }
    const index = copy_list.findIndex((t) => t.id === todo_id);
    console.log(index);
    copy_list[index].completed = !copy_list[index].completed;
    setTodos(copy_list);
    console.log("value");
    console.log(copy_list[index].completed);
  }
  return (
    <div
      className="todos-container"
      //   style={{
      //     backgroundColor: "#f1f1f1",
      //     padding: "20px",
      //     borderRadius: "10px",
      //     boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      //     textAlign: "center",
      //     maxWidth: "500px",
      //     margin: "40px  auto",
      //     background: "linear-gradient(to bottom, #ffffff, #f1f1f1)",
      //   }}
    >
      <h2>Todos</h2>
      <div className="sorting-container">
        <label htmlFor="sorting">Sort by:</label>
        <select id="sorting" value={sorting} onChange={handleSortingChange}>
          <option value="sequential">Sequential</option>
          <option value="completed">Completed</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="random">Random</option>
        </select>
      </div>
      <div className="todos-list">
        {sortedTodos.map((todo) => (
          <div key={todo.id} className="todo-item ">
            <input
              type="checkbox"
              onChange={(e) => handleCheckBoxChange(todo.id)}
              checked={todo.completed}
            />
            {todo.completed === true ? (
              <span>
                <s>{todo.title}</s>
              </span>
            ) : (
              <span>{todo.title}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;

// function Todos(){
//     return(
//         <div  className="content">
//             Todos
//         </div>
//     )
// }
