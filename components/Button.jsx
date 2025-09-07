import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../designs/global";

const Button = ({ title, onPress, isLoading, otherStyles }) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={{ ...globalStyles.button, ...otherStyles }}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
