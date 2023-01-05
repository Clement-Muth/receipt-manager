import { Box } from "components";
import { Header } from "common";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Transaction } from "./transaction";
import { graphData } from "./constant";

export const Home = () => {
  return (
    <Box flex={1} pt={20} bg="white">
      <Header title="$1,840" subTitle="USD • American Dollar" />
      <Box flex={1} mt={20}>
        <LineChart
          data={graphData}
          height={150}
          width={Dimensions.get("screen").width + 60}
          style={{ paddingRight: 0 }}
          chartConfig={{
            barPercentage: 100,
            color: () => "#007EFC",
            fillShadowGradientFromOpacity: 0.2,
            fillShadowGradientToOpacity: 0,
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white"
          }}
          withInnerLines={false}
          withDots={false}
          withVerticalLines={false}
          withHorizontalLabels={false}
          withHorizontalLines={false}
          withVerticalLabels={false}
          bezier
        />
        <Transaction />
      </Box>
    </Box>
  );
};
