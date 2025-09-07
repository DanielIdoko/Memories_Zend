import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabIcon = ({ iconName, name, color, focused }) => {
  return (
    <View
      style={{
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        gap: 1
      }}
    >
      <Ionicons name={iconName} size={24} color={color} />
      <Text
        style={{
          fontWeight: focused ? "bold" : "normal",
          fontSize: 13,
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
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "#33c",
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
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Home"
              focused={focused}
              color={color}
              iconName="home-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addmemory"
        options={{
          title: "Add-Memory",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Add Memory"
              focused={focused}
              color={color}
              iconName="add-circle-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Collections",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Collections"
              focused={focused}
              color={color}
              iconName="albums-outline"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
