import React, { useState, useCallback } from "react";

export const useTodoList = () => {
    const [todoList, setTodoList] = useState([]);

    return {
        todoList,
        setTodoList,
        removeByTitle: useCallback(title =>
            setTodoList(list => list.filter(item => item && item.title !== title))
        ),
        removeById: useCallback(id =>
            setTodoList(list => list.filter(item => item && item.id !== id))
        ),
        addTodo: useCallback(newTodo =>
            setTodoList(prev => [...prev, newTodo])
        ),
    }

};