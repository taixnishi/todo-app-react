import {
  Box,
  Checkbox,
  Flex,
  Text,
  IconButton,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { TodoType } from "types/";
import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/storeHooks";
import { deleteTodo, updateTodo } from "store/slices/todoReducer";
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
const SText = styled(Text)`
  text-decoration: ${(props) => (props.ischecked ? "line-through" : "none")};
`;
type TodoProps = {
  todo: TodoType;
};
const TodoCard: React.FC<TodoProps> = ({ todo }) => {
  const { todoText, id, isChecked } = todo;
  const dispatch = useAppDispatch();
  console.log(todoText, isChecked);
  return (
    <>
      <SBox boxShadow="xs">
        <Flex>
          <Center h="50px" mr={3}>
            <Checkbox
              size="lg"
              isChecked={isChecked}
              onChange={() =>
                dispatch(updateTodo({ ...todo, isChecked: !isChecked }))
              }
            />
          </Center>
          <Center>
            <SText color="dark" ischecked={isChecked ? 1 : 0}>
              {todoText}
            </SText>
          </Center>
          <Spacer />
          {isChecked && (
            <Center>
              <SIconButton
                aria-label="Search database"
                icon={<CloseIcon />}
                size="sm"
                variant="ghost"
                onClick={() => dispatch(deleteTodo({ ...todo }))}
              />
            </Center>
          )}
        </Flex>
      </SBox>
    </>
  );
};

export default TodoCard;
