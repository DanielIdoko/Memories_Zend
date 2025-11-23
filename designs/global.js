import { StyleSheet } from "react-native";

const width = window.window.innerWidth
const height = window.window.innerHeight

const globalStyles = StyleSheet.create({
    button: {
      padding: 10,
      width: width - 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#3263f0",
      borderRadius: 10  
    },
    buttonText: {
      color: "#fff",
      fontSize: 15
    }
});

export default globalStyles;
