import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const AppBar = () => (
  <View
    style={{
      height: 100,
      width: "100%",
      backgroundColor: "#fff",
      marginBottom: 10,
      padding: 10,
      flexDirection: "row",
    }}
  >
    <Link to='/'>
      <FontAwesome style={appBarStyle.text} name='home' />
    </Link>
    <Link to='/checkout'>
      <MaterialIcons name='shopping-cart-checkout' style={appBarStyle.text} />
    </Link>
  </View>
);

const appBarStyle = StyleSheet.create({
  text: {
    color: "#24292e",
    fontSize: 35,
    fontWeight: "bold",
    lineHeight: 100,
    marginRight: 30,
  },
});

export default AppBar;
