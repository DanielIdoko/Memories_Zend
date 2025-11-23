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
      <Text style={indexStyles.mainText}>Welcome</Text>
      <Text style={indexStyles.subText}>
       Save your best memories for the future.
      </Text>

      {/* Button */}
      <Button 
       title="Get Started"
       onPress={() => router.push('/home')} 
       isLoading={false}
       otherStyles={{marginTop: 30, position: 'fixed', bottom: 20}}/>
    </SafeAreaView>
  );
}
