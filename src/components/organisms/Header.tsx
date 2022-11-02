import {
  Box,
  Flex,
  Heading,
  Container,
  Button,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import TodoForm from "components/organisms/TodoForm";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Box bg="teal" p={3} h="300px">
        <Container>
          <Heading as="h1" my={10}>
            Todo App
          </Heading>
          <TodoForm />
          <Flex>
            <Button onClick={toggleColorMode} mt={5}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            <Spacer />
            <Button mt={5} colorScheme="telegram">
              追加
            </Button>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
