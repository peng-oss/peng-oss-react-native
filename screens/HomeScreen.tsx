import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DemoType } from "../constants/Home";
import { RootStackScreenProps } from "../navigation/navigationType";

export const HomeScreen = ({ navigation }: RootStackScreenProps<"Home">) => {
  const onPressMoreMenu = () => {
    navigation.push("MoreMenuDemoScreen");
  };
  const data = [
    {
      name: "MoreMenu",
      onPress: onPressMoreMenu,
    },
  ];

  const renderItem = (data: { item: DemoType }) => {
    const { item } = data;
    const { onPress, name } = item;
    return (
      <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return <FlatList data={data} renderItem={renderItem} />;
  };
  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
