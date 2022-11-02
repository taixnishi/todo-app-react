import type { NextPage } from "next";
import TodoCard from "components/organisms/TodoCards";
import { TodoProps } from "types";
const Home: NextPage = ({todoList}) => {
  return (
    <>
    {
      todoList.map((todo: TodoProps) => (
        <TodoCard key={todo.id} todoText={todo.todoText} id={todo.id}/>
      ))
    }
    </>
  );
};

export default Home;


export async function getStaticProps() {
  const todoList = [
    {
      id: 1,
      todoText: "creregregggggggggreee"
    },
    {
      id: 2,
      todoText: "creregregggggggggreee"
    },
    {
      id: 3,
      todoText: "creregregggggggggreee"
    },
    {
      id: 4,
      todoText: "creregregggggggggreee"
    },
    {
      id: 5,
      todoText: "creregregggggggggreee"
    },
    {
      id: 6,
      todoText: "creregregggggggggreee"
    },
    {
      id: 7,
      todoText: "creregregggggggggreee"
    },
    {
      id: 8,
      todoText: "creregregggggggggreee"
    },
    {
      id: 9,
      todoText: "creregregggggggggreee"
    },
  ]
  return {
    props: {
      todoList
    }
  }
}