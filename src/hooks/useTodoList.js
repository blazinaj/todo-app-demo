import React, { useState, useCallback } from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useTodoList = () => {
    const [todoList, setTodoList] = useLocalStorage('todoList', []);

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