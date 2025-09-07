import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import indexStyles from "../designs/index.design";
import { logo } from "../assets/images";
import Button from "../components/Button";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={indexStyles.indexPage}>
      <Image source={logo} style={indexStyles.image} resizeMode="contain" />
      <Text style={indexStyles.mainText}>Welcome to Zend</Text>
      <Text style={indexStyles.subText}>
        A place where memories are remembered for the future.
      </Text>

      {/* Button */}
      <Button 
       title="Get Started"
       onPress={() => router.push('/(tabs)/home')} 
       isLoading={false}
       otherStyles={{position: "fixed", bottom: -160}}/>
    </SafeAreaView>
  );
}
