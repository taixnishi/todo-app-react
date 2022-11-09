import {
  Box,
  Checkbox,
  Flex,
  Spacer,
  Center,
  Input,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

// import Checkbox from "components/atoms/CheckBox";
const SBox = styled(Box)`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
`;
const TodoInput = () => {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <>
      <SBox boxShadow="base">
        <Flex>
          <Center h="50px" mr={3}>
            <Checkbox
              size="lg"
              {...register("isChecked")}
            />
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
        </Flex>
      </SBox>
    </>
  );
};

export default TodoInput;
