import { FC } from "react";
import { Flex, Text } from "components";
import { Image, TouchableOpacity } from "react-native";
import { Transaction } from "./constants";

interface TransactionCardProps extends Transaction {
  onPress: () => void;
}

export const TransactionCard: FC<TransactionCardProps> = ({ onPress, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={{ marginBottom: 10 }} onPress={onPress}>
      <Flex justifyContent="center" py={13} width="100%">
        <Flex flexDirection="row" flex={1}>
          <Image source={{ uri: props.img }} style={{ width: 40, height: 40, borderRadius: 50 }} />
          <Flex ml={10} flexDirection="column" alignItems="flex-start">
            <Text fontWeight="700">{props.company}</Text>
            <Text fontSize={12} color="#A9A9A9">
              {props.time}, delayed transaction
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDirection="column" alignItems="flex-end">
            <Text fontWeight="700">- ${props.price}</Text>
          </Flex>
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};
