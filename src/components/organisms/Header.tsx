import {
  Box,
  Flex,
  Heading,
  Container,
  Button,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import TodoForm from "components/organisms/TodoInput";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import { FormProvider, useForm } from "react-hook-form";
import { addTodo, clearTodoList } from "store/slices/todoReducer";
import { TodoType } from "types";

const Header = () => {
  const methods = useForm();
  const todoList = useAppSelector((state) => state.todo.todoList);
  const dispatch = useAppDispatch();
  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo: TodoType = { ...values, id: todoList.length + 1 , isChecked: false};
        dispatch(addTodo(newTodo));
        methods.reset();
        resolve("ok");
      }, 500);
    });
  }
  return (
    <header>
      <Box bg="teal" p={3} h="300px">
        <Container>
          <Heading as="h1" my={10}>
            Todo App
          </Heading>
          {/* form */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <TodoForm />
              <Flex>
                {/* <Button onClick={toggleColorMode} mt={5}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button> */}
                <Spacer />
                <Button
                  mt={5}
                  colorScheme="telegram"
                  isLoading={methods.formState.isSubmitting}
                  type="submit"
                >
                  追加
                </Button>
              </Flex>
            </form>
          </FormProvider>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
