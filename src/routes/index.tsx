import HomePage from "pages";
import CardPage from "pages/card";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Balance, State, Text, Switch, Card, More } from "components";

const Tab = createBottomTabNavigator();

export const Browser = () => {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: "white",
          text: "black",
          border: "#A9A9A9",
          card: "white",
          notification: "white",
          primary: "white"
        }
      }}
    >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 18,
            paddingBottom: 5,
            paddingTop: 5
          }
        }}
      >
        <Tab.Screen
          name="Account"
          component={HomePage}
          options={{
            tabBarLabel: ({ focused, children }) => (
              <Text fontSize={10} fontWeight="700" color={focused ? "#1a73e8" : "#A9A9A9"}>
                {children}
              </Text>
            ),
            tabBarIcon: ({ focused }) => <Balance fill={focused ? "#1a73e8" : "#A9A9A9"} />
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={CardPage}
          options={{
            tabBarLabel: ({ focused, children }) => (
              <Text fontSize={10} fontWeight="700" color={focused ? "#1a73e8" : "#A9A9A9"}>
                {children}
              </Text>
            ),
            tabBarIcon: ({ focused }) => <State fill={focused ? "#1a73e8" : "#A9A9A9"} />
          }}
        />
        <Tab.Screen
          name="Payments"
          component={CardPage}
          options={{
            tabBarLabel: ({ focused, children }) => (
              <Text fontSize={10} fontWeight="700" color={focused ? "#1a73e8" : "#A9A9A9"}>
                {children}
              </Text>
            ),
            tabBarIcon: ({ focused }) => <Switch fill={focused ? "#1a73e8" : "#A9A9A9"} />
          }}
        />
        <Tab.Screen
          name="Cards"
          component={CardPage}
          options={{
            tabBarLabel: ({ focused, children }) => (
              <Text fontSize={10} fontWeight="700" color={focused ? "#1a73e8" : "#A9A9A9"}>
                {children}
              </Text>
            ),
            tabBarIcon: ({ focused }) => <Card fill={focused ? "#1a73e8" : "#A9A9A9"} />
          }}
        />
        <Tab.Screen
          name="More"
          component={CardPage}
          options={{
            tabBarBadge: 1,
            tabBarBadgeStyle: {
              backgroundColor: "#E61492"
            },
            tabBarLabel: ({ focused, children }) => (
              <Text fontSize={10} fontWeight="700" color={focused ? "#1a73e8" : "#A9A9A9"}>
                {children}
              </Text>
            ),
            tabBarIcon: ({ focused }) => <More fill={focused ? "#1a73e8" : "#A9A9A9"} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
