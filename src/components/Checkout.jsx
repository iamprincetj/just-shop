import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useCartsContextValue } from "../context/CartsContextProvider";
import ItemSeparatorComponent from "./ItemSeparator";
import ProductItem from "./ProductItem";
import { theme } from "../../theme";
import { useNavigate } from "react-router-native";

const Checkout = () => {
  const value = useCartsContextValue();
  const navigate = useNavigate();

  if (value.length < 1) {
    return (
      <View style={[checkoutStyle.container, { marginLeft: 10 }]}>
        <Text>No product for checkout </Text>
      </View>
    );
  }

  return (
    <View style={checkoutStyle.container}>
      <View>
        <FlatList
          ItemSeparatorComponent={ItemSeparatorComponent}
          data={value}
          scrollEnabled
          style={{ width: "100%" }}
          renderItem={({ item }) => <ProductItem item={item} />}
        />
      </View>
      {value.length > 0 && (
        <Pressable
          onPress={() => navigate("/successful")}
          style={checkoutStyle.checkOutBtn}
        >
          <Text style={checkoutStyle.btnText}>Check out </Text>
        </Pressable>
      )}
    </View>
  );
};

const checkoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  checkOutBtn: {
    height: 50,
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    margin: 10,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 30,
    fontSize: 20,
    fontWeight: theme.font.bold,
  },
});

export default Checkout;
