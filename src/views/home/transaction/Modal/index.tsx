import { ModalBottom, Text, type ModalBottomProps, Flex, Box, Bag, Card, Clock } from "components";
import { FC } from "react";
import { Image } from "react-native";
import { Transaction } from "../constants";

interface TransactionModalProps extends ModalBottomProps {
  data: Transaction | null;
}

export const TransactionModal: FC<TransactionModalProps> = ({ data, ...props }) => {
  return (
    <ModalBottom {...props}>
      {data && (
        <Box mt={20} width="100%" pb={20}>
          <Flex flexDirection="column" justifyContent="center">
            <Image source={{ uri: data.img }} style={{ width: 80, height: 80, borderRadius: 50 }} />
            <Text
              fontWeight="700"
              fontSize={18}
              borderWidth={1}
              borderRadius={50}
              px={20}
              py={2}
              mt={10}
              borderColor="#D3D3D3"
            >
              {data.category}
            </Text>
          </Flex>
          <Box width="100%" px={30}>
            <Flex mt={50} justifyContent="space-between" width="100%">
              <Text fontWeight="700" fontSize={18}>
                {data.company}
              </Text>
              <Text fontWeight="700" fontSize={18}>
                -${data.price}
              </Text>
            </Flex>
            <Text mt={3} fontSize={12} fontWeight="600" color="#A9A9A9">
              {data.time}
            </Text>
          </Box>
          <Box mt={25} px={30}>
            <Text fontWeight="700" fontSize={18}>
              Details
            </Text>
            <Box borderWidth={1} borderColor="#D3D3D3" borderRadius={10} mt={10}>
              <Flex px={20} py={10} borderBottomWidth={1} borderBottomColor="#D3D3D3">
                <Bag fill="#A9A9A9" />
                <Box ml={10}>
                  <Text>Category</Text>
                  <Text fontSize={12} color="#A9A9A9">
                    {data.category}
                  </Text>
                </Box>
              </Flex>
              <Flex px={20} py={10} borderBottomWidth={1} borderBottomColor="#D3D3D3">
                <Card fill="#A9A9A9" />
                <Box ml={10}>
                  <Text>Transaction type</Text>
                  <Text fontSize={12} color="#A9A9A9">
                    {data.card}
                  </Text>
                </Box>
              </Flex>
              <Flex px={20} py={10}>
                <Clock fill="#A9A9A9" />
                <Box ml={10}>
                  <Text>Status</Text>
                  <Text fontSize={12} color="#A9A9A9">
                    Authorized
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      )}
    </ModalBottom>
  );
};
