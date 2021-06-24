import React from 'react';



const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
 
  };
  // Submit prevents reload and posts input value
  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 100
      }]);
      setInputText("");
  };
  const checkStatus = (e) => {
    setStatus(e.target.value);
  }
    return(
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div onChange={checkStatus} className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;