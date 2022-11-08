import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store/inidex";
import type { TodoType } from "types/index";
interface TodoState {
  todoList: TodoType[];
}

const initialState: TodoState = {
  todoList: [
    {
      id: 1,
      todoText: "todo",
      isChecked: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      return {
        todoList: [...state.todoList, action.payload],
      };
    },
    clearTodoList: () => {
      return { todoList: [] };
    },
    updateTodo: (state, action: PayloadAction<TodoType>) => {
      console.log(action);
      const index: number = state.todoList.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      state.todoList[index].isChecked = action.payload.isChecked;
    },
    deleteTodo: (state, action: PayloadAction<TodoType>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const { addTodo, clearTodoList, updateTodo, deleteTodo } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodoList = (state: RootState) => state.todo.todoList;

export default todoSlice.reducer;
