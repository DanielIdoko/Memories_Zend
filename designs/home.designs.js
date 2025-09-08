import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  main: {
    backgroundColor: "#f1f1f1"
  },
  header: {
    height: 44,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 2
  },
  asideBar: {
    width: 220,
    borderRightWidth: 1,
    borderRightColor: "#CBCBCB",
    padding: 10,
  },
});

export default homeStyles;
