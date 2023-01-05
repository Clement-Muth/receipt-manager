import { Box, Flex } from "components";
import { Image } from "react-native";
import { Header } from "common";
import { ListItem } from "./Item";
import { items } from "./constant";

export const Card = () => {
  return (
    <Box flex={1} pt={20} bg="white">
      <Header title="Your cards" subTitle="1 card" />
      <Flex justifyContent="center" mt={20}>
        <Image
          source={require("../../public/static/images/card.png")}
          style={{ width: 300, height: 200, resizeMode: "contain" }}
        />
      </Flex>
      <Box px={20} mt={55}>
        {items.map((props) => (
          <ListItem {...props} key={props.title} />
        ))}
      </Box>
    </Box>
  );
};
