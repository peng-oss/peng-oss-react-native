import React, { useState } from "react";
import { Button, Text, View, StyleSheet, Alert } from "react-native";
import { MoreMenu } from "../components/MoreMenu/MoreMenu";
import { MoreMenuItem } from "../components/MoreMenu/MoreMenuItem";
import { RootStackScreenProps } from "../navigation/navigationType";

export const MoreMenuDemoScreen = ({
  navigation,
}: RootStackScreenProps<"MoreMenuDemoScreen">) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={onPressButton} title="show" />,
    });
  }, [navigation]);

  const [visible, setVisible] = useState<boolean>(false);

  const onPressBackground = () => {
    setVisible(false);
  };

  const onPressFirst = () => {
    Alert.alert("这是第一个");
  };
  const onPressSec = () => {
    Alert.alert("这是第二个");
  };

  const onPressButton = () => {
    setVisible(true);
  };
  return (
    <View style={styles.container}>
      <MoreMenu visible={visible} onPressBackground={onPressBackground}>
        <MoreMenuItem text={"第一个"} onPress={onPressFirst} />
        <MoreMenuItem text={"第二个"} onPress={onPressSec} />
      </MoreMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});
