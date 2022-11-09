import type { NextPage } from "next";
import TodoCard from "components/organisms/TodoCards";
import { TodoType } from "types";
import { useAppSelector } from "hooks/storeHooks";
import { Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  const todoList = useAppSelector((state) => state.todo.todoList);
  return (
    <>
      {todoList.length === 0 ? (
        <Center fontSize='2xl' color="#214842" mt="40">Todo is not found.</Center>
      ) : (
        <>
          {todoList.map((todo: TodoType) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </>
  );
};

export default Home;

// export async function getStaticProps() {
//   const todoList = useAppSelector(state => state.todo.todoList)
//   return {
//     props: {
//       todoList,
//     },
//   };
// }
