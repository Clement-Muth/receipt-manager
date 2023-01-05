import React, { useState } from "react";
import { Box, Flex, Text } from "components";
import { ScrollView } from "react-native";
import { TransactionCard } from "./card";
import { Transaction as TransactionT, transactionList } from "./constants";
import { TransactionModal } from "./Modal";

export const Transaction = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<TransactionT | null>(null);

  return (
    <Box px={10}>
      <Flex justifyContent="space-between">
        <Text color="#A9A9A9" fontWeight="700">
          8 June
        </Text>
        <Text color="#A9A9A9" fontWeight="700">
          - $1,816.45
        </Text>
      </Flex>
      <ScrollView>
        <Box flex={1} mt={5} alignItems="center">
          {transactionList.map(({ ...props }, i) => (
            <TransactionCard
              {...props}
              onPress={() => {
                setOpenModal(true);
                setModalData(props);
              }}
              key={props.time + i}
            />
          ))}
        </Box>
      </ScrollView>
      <TransactionModal
        data={modalData}
        open={Boolean(openModal)}
        onClose={() => {
          setOpenModal(false);
          setModalData(null);
        }}
      />
    </Box>
  );
};
