import { FlatList, StyleSheet, View } from "react-native";
import ItemSeparatorComponent from "./ItemSeparator";
import ProductItem from "./ProductItem";

const ProductsItem = ({ item }) => {
  return (
    <View style={itemStyle.container}>
      <FlatList
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={item}
        scrollEnabled
        style={{ width: "100%" }}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
  },
});

export default ProductsItem;
