import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface Props {
  /**
   * 文本
   */
  text: string;
  /**
   * 回调
   */
  onPress: () => void;
  /**
   * 图标 （可选）
   */
  icon?: ImageSourcePropType;
  /**
   * 样式
   */
  style?: StyleProp<ViewStyle>;
}

export const MoreMenuItem: FC<Props> = (props: Props) => {
  const { onPress, icon, text, style } = props;
  return (
    <TouchableOpacity style={[styles.item, style]} onPress={onPress}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Text numberOfLines={1}>{text}</Text>
    </TouchableOpacity>
  );
};

MoreMenuItem.defaultProps = {
  icon: undefined,
  style: {},
};
const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 40,
    marginVertical: 1,
    minWidth: 109,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
