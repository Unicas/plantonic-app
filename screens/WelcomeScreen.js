import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { Theme } from "../config";
import Logo from "../assets/Logo.png";

const { height, width } = Dimensions.get("screen");

export function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Image
        source={Logo}
        style={{
          width: 350,
          height: 450,
          position: "absolute",
          tranform: [{ translateX: 50 }],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.back,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: Theme.colors.backS,
  },
});
