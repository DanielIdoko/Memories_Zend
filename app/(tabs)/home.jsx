import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import homeStyles from "../../designs/home.designs";
import { Feather } from "@expo/vector-icons";
import CollectionCard from "../../components/CollectionCard";

const Home = () => {
  return (
    <SafeAreaView style={homeStyles.main}>
      {/* Header start */}
      <ScrollView>
        <View style={homeStyles.header}>
          <Text
            style={{
              color: "#4B4C4C",
              flex: 1,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Hi, Welcome!
          </Text>
          <Feather
            name="menu"
            size={20}
            style={{ color: "#121212" }}
            onPress={() => {}}
          />
        </View>
        {/* Header ends here */}

        {/* Main content */}
        <View 
        style={{
          padding: 10
        }}>
          <Text style={{
            fontSize: 14
          }}>Recents</Text>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
