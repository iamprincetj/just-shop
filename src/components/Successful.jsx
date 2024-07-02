import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigate } from "react-router-native";

const Successful = () => {
  const navigate = useNavigate();
  return (
    <View style={successStyle.container}>
      <View style={successStyle.header}>
        <Text style={[successStyle.headerText]}>Thanks! </Text>
      </View>
      <View style={successStyle.footer}>
        <View style={{ lineHeight: 500 }}>
          <View style={{ alignItems: "center" }}>
            <FontAwesome name='check' style={successStyle.icon} />
            <Text style={successStyle.footerText}>
              {" "}
              Thanks for purchasing!{" "}
            </Text>
          </View>
          <Pressable onPress={() => navigate("/")} style={successStyle.btn}>
            <Text style={successStyle.btnText}> Continue Shopping </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const successStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: theme.backgroundColor.primary,
  },
  header: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: theme.font.bold,
    marginTop: 100,
  },
  footer: {
    backgroundColor: theme.backgroundColor.secondary,
    position: "absolute",
    width: "100%",
    top: "50%",
    height: 500,
    zIndex: 10,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    width: 250,
    height: 50,
    padding: 10,
    backgroundColor: theme.colors.primary,
    marginTop: 35,
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: theme.font.bold,
  },
  icon: {
    fontSize: 35,
    color: "#FFF",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    textAlign: "center",
    marginBottom: 5,
    lineHeight: 100,
  },
});

export default Successful;
