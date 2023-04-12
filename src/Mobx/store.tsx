import React from "react";
import todoList from "../services/TodoList";

export const store = {
    todoList
};

export const StoreContext = React.createContext<typeof store>(store);
