import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TabIcon = ({
  IconComponent,
  iconName,
  name,
  color,
  focused,
  iconOtherStyles,
}) => {
  return (
    <View
      style={{
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <IconComponent
        name={iconName}
        size={24}
        color={color}
        style={iconOtherStyles}
      />
      <Text
        style={{
          fontWeight: focused ? "700" : "normal",
          fontSize: 12,
          color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0DA5D8",
        tabBarInactiveTintColor: "#676767",
        tabBarStyle: {
          backgroundColor: "#f2f2f2",
          height: 83,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              IconComponent={Feather}
              name="Home"
              focused={focused}
              color={color}
              iconName="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addmemory"
        options={{
          title: "Add-Memory",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name=""
              focused={focused}
              IconComponent={Ionicons}
              color={color}
              iconOtherStyles={{
                width: 45,
                height: 45,
                backgroundColor: "#121212",
                padding: 10,
                color: "#ffffff",
                borderRadius: 30,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 10,
              }}
              iconName="add"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Collections",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              IconComponent={MaterialCommunityIcons}
              name="Collections"
              focused={focused}
              color={color}
              iconName="image-multiple-outline"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
