import {
  Box,
  Checkbox,
  Flex,
  IconButton,
  Spacer,
  Center,
  Input,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

// import Checkbox from "components/atoms/CheckBox";
const SBox = styled(Box)`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
`;
const SIconButton = styled(IconButton)`
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const TodoForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve("ok");
      }, 3000);
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SBox boxShadow="base">
          <Flex>
            <Center h="50px" mr={3}>
              <Checkbox size="lg" />
            </Center>
            <Center>
              <Input
                id="todoText"
                variant="unstyled"
                placeholder="Create a new todo"
                {...register("todoText", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </Center>
            <Spacer />
            {/* <Center>
            <SIconButton
              aria-label="Search database"
              icon={<CloseIcon />}
              size="sm"
              variant="ghost"
            />
          </Center> */}
          </Flex>
        </SBox>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default TodoForm;
