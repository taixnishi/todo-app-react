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
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

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
const TodoInput = () => {
  const { register } = useFormContext(); // retrieve all hook methods
  const [isChecked, setIsChecked] = useState(false);
  // useEffect(() => {
  //   console.log(isChecked);
  // }, [isChecked])
  return (
    <>
      <SBox boxShadow="base">
        <Flex>
          <Center h="50px" mr={3}>
            <Checkbox size="lg"/>
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
