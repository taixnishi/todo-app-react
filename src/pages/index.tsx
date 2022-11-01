import type { NextPage } from "next";
import { Heading, useColorMode} from "@chakra-ui/react";
import TodoCard from "components/organisms/TodoCards";
const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <TodoCard></TodoCard>
    </>
  );
};

export default Home;
