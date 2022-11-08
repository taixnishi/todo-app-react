import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store/inidex";
import type {TodoType} from "types/index";
interface TodoState {
  todoList: TodoType[];
}

const initialState: TodoState = {
  todoList: [
    {
        id: 1,
        todoText: "todo",
        isChecked: true
    }
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
    /*
    [
     {
        id: 1,
        todoText: denodendoen,
        isChecked: true
     },
     {
        id: 2,
        todoText: denodendoen,
        isChecked: true
     },
    ]
    */
    updateTodo: (state, action: PayloadAction<TodoType>) => {
        console.log(action);
        const result = state.todoList.find((todo) => {
            return todo.id === action.payload.id
        })
        // console.log(result?.isChecked)
    },
  },
});

export const { addTodo, clearTodoList, updateTodo} = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodoList = (state: RootState) => state.todo.todoList;

export default todoSlice.reducer;
