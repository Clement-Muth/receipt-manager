import { Add, Flex, Switch, Text } from "components";
import { FC } from "react";
import { TouchableOpacity } from "react-native";

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header: FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" px={15}>
      <TouchableOpacity style={{ backgroundColor: "rgba(26, 115, 232, 0.1)", borderRadius: 50, padding: 5 }}>
        <Add fill="#007EFC" width={25} height={25} />
      </TouchableOpacity>
      <Flex flexDirection="column">
        <Text fontSize={36} fontWeight="800" color="#454545">
          {title}
        </Text>
        <Text fontSize={14} fontWeight="800" color="#A9A9A9">
          {subTitle}
        </Text>
      </Flex>
      <TouchableOpacity style={{ backgroundColor: "rgba(238, 91, 121, 0.1)", borderRadius: 50, padding: 5 }}>
        <Switch fill="#EE5B79" width={25} height={25} />
      </TouchableOpacity>
    </Flex>
  );
};

export default Header;
