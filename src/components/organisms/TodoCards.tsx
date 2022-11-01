import {
  Box,
  Checkbox,
  Flex,
  Text,
  IconButton,
  Spacer,
  Center,
  Input
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
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
const TodoCard = () => {
  return (
    <>
      <SBox boxShadow="base" >
        <Flex>
          <Center h="50px" mr={3}>
            <Checkbox size="lg" />
          </Center>
          <Center>
            <Input variant="unstyled" placeholder="Create a new todo" />
            {/* <Text color="dark">Create a new todo</Text> */}
          </Center>
          <Spacer />
          <Center>
            <SIconButton
              aria-label="Search database"
              icon={<CloseIcon />}
              size="sm"
              variant="ghost"
            />
          </Center>
        </Flex>
      </SBox>
    </>
  );
};

export default TodoCard;
