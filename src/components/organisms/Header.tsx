import {
  Box,
  Flex,
  Heading,
  Container,
  Button,
  Spacer,
} from "@chakra-ui/react";
import TodoInput from "components/organisms/TodoInput";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { addTodo, clearTodoList } from "store/slices/todoReducer";
import { TodoType } from "types";

type FormValues = {
  isChecked: boolean;
  todoText: string;
};
const Header = () => {
  const methods = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todo.todoList);

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const newTodo: TodoType = { ...values, id: todoList.length + 1 };
    dispatch(addTodo(newTodo));
    methods.reset();
  };

  const deleteAllItems = (): void => {
    const isConfirm = confirm("Are you sure you want to delete everything?");
    if (isConfirm) dispatch(clearTodoList());
  };

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
              <TodoInput />
              <Flex>
                <Spacer />
                <Button
                  mt={5}
                  colorScheme="telegram"
                  isLoading={methods.formState.isSubmitting}
                  type="submit"
                >
                  Add
                </Button>

                <Button
                  ml={3}
                  mt={5}
                  colorScheme="red"
                  onClick={deleteAllItems}
                  disabled={todoList.length > 0 ? false : true}
                >
                  Delete All
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
