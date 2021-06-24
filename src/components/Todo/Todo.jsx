import React from 'react';

const Todo = ({text, todos, todo, setTodos}) => {
    // DELETE BUTTON
    const deleteButton = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    // COMPLETED TASK
    const completedTask = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        )
    }
    return (
        <div className="todo"><li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completedTask} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteButton} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;