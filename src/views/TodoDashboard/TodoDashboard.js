import React from "react";
import TodoList from "../../components/Todo/TodoList";

const TodoDashboard = (props) => {

    return (
        <div>
            <TodoList todoHook={props.todoHook} userHook={props.userHook}/>
        </div>
    )

};

export default TodoDashboard;