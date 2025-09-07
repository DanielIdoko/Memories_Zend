import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 30
    },
    indexPage: {
        flex: 1,
        height: 'auto',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f2f2f2"
    },
    mainText: {
        fontSize: 30,
        padding: 5,
        fontWeight: "bold",
        fontFamily: "sans-serif",
    },
    subText: {
        fontSize: 13,
        padding: 2,
        textAlign: 'center',
        color: "#8e8e8e",
    }
});

export default indexStyles;