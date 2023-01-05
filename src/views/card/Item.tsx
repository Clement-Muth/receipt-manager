import { Box, Flex, Text } from "components";
import { FC, ReactNode } from "react";

export interface ListItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export const ListItem: FC<ListItemProps> = ({ icon, title, subtitle }) => {
  return (
    <Flex alignItems="center" mb={30}>
      <Box bg="#007EFC" borderRadius={50} p={8} width={46}>
        {icon}
      </Box>
      <Box ml={10}>
        <Text fontSize={16} fontWeight="800">
          {title}
        </Text>
        <Text fontSize={12} fontWeight="800" color="#A9A9A9">
          {subtitle}
        </Text>
      </Box>
    </Flex>
  );
};
