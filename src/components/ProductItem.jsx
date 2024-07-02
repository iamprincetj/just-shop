import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import {
  useCartsContextDispatch,
  useCartsContextValue,
} from "../context/CartsContextProvider";
import { theme } from "../../theme";

const img = require("../../assets/Money-Love.jpeg");

const ProductItem = ({ item }) => {
  const dispatch = useCartsContextDispatch();
  const value = useCartsContextValue();

  const valueIds = value.map((val) => val.id);
  const [btnText, setBtnText] = useState(
    valueIds.includes(item.id) ? "Remove" : "Add"
  );

  const onPress = (item) => {
    if (btnText === "Add") {
      dispatch({ type: "ADD_CART", payload: item });
      setBtnText("Remove");
    } else {
      dispatch({ type: "REMOVE_CART", payload: item.id });
      setBtnText("Add");
    }
  };

  //{ uri: item.thumbnail }

  return (
    <View style={itemStyle.container}>
      <View style={itemStyle.imageContainer}>
        <Image style={itemStyle.itemImage} source={{ uri: item.thumbnail }} />
      </View>
      <View style={itemStyle.itemContent}>
        <View>
          <Text style={itemStyle.itemTitle}>{item.title}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <View>
            <Text style={itemStyle.itemText}>Qty</Text>
            <Text style={itemStyle.itemText}>3</Text>
          </View>
          <View>
            <Text style={itemStyle.itemText}>Discount %</Text>
            <Text style={itemStyle.itemText}>50%</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={itemStyle.itemPrice}>${item.price} </Text>
          <Pressable style={itemStyle.button} onPress={() => onPress(item)}>
            <Text style={itemStyle.buttonText}>{btnText} </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemContent: {
    height: "100%",
    padding: 10,
    flex: 1,
  },
  imageContainer: {
    borderWidth: 5,
    borderColor: "#fff",
    padding: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: theme.font.bold,
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: theme.font.bold,
    textAlign: "left",
    color: theme.colors.textPrimary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 3,
    width: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    color: theme.colors.textPrimary,
  },
});

export default ProductItem;
