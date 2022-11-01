import { Box, Center, Grid, GridItem, Checkbox } from "@chakra-ui/react";
import styled from "@emotion/styled";
// import Checkbox from "components/atoms/CheckBox";
const SBox = styled(Box)`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
`;
const TodoCard = () => {
  return (
    <>
      <SBox>
        <Grid
          templateAreas={`"check title"
                        "check content"
                  "footer footer"`}
          gridTemplateRows={"40px 1fr 30px"}
          gridTemplateColumns={"70px 1fr"}
          h="150px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={"check"}>
            <Center>
              <Checkbox />
            </Center>
          </GridItem>
          <GridItem pl="2" bg="orange.300" area={"title"}>
            title
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"content"}>
            content
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            Footer
          </GridItem>
        </Grid>
        {/* <Heading>タスク名</Heading>
          <Text>
            fadsnofsdofnhodsfhoadsnfduashfnricheriobgreighvbirohgciuobnvsdvsdavsadvsadvsdavsadvvsvsadvsadvsdvsdvasv
          </Text> */}
      </SBox>
    </>
  );
};

export default TodoCard;
