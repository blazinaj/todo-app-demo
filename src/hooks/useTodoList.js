import React, { useState, useCallback } from "react";

export const useTodoList = () => {
    const [todoList, setTodoList] = useState([]);

    return {
        todoList,
        setTodoList,
        removeByTitle: useCallback(index =>
            setTodoList(list => list.filter(item => item && item.title !== index))
        ),
        addTodo: useCallback(newTodo =>
            setTodoList(prev => [...prev, newTodo])
        ),
    }

};