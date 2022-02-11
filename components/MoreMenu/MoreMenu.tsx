import React, { FC, PropsWithChildren } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  /**
   * 控制显示
   */
  visible: boolean;
  /**
   *点击空白区域消失的回调
   */
  onPressBackground: () => void;
}

export const MoreMenu: FC<PropsWithChildren<Props>> = (props) => {
  const animated: Animated.Value = new Animated.Value(0);
  const startAnimation = () => {
    Animated.timing(animated, {
      toValue: 1,
      useNativeDriver: true,
      duration: 150,
    }).start();
  };

  const closeAnimation = () => {
    Animated.timing(animated, {
      toValue: 0,
      useNativeDriver: true,
      duration: 150,
    }).start();
  };

  const onPressBackground = () => {
    const { onPressBackground: onPressBackgroundProps } = props;
    onPressBackgroundProps && onPressBackgroundProps();
  };
  const { visible, children } = props;
  if (!children) {
    return null;
  }
  if (visible) {
    startAnimation();
  } else {
    closeAnimation();
  }
  // @ts-ignore
  const Y = children.length * 32;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressBackground}
      style={visible ? styles.backDrop : styles.fixedDrop}
    >
      <Animated.View
        style={[
          {
            opacity: animated,
            transform: [
              {
                scale: animated,
              },
              {
                translateX: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
              {
                translateY: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, Y],
                }),
              },
            ],
          },
          styles.box,
          { top: 3 - Y },
        ]}
      >
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    backgroundColor: "white",
    elevation: 10,
    minWidth: 109,
    right: 16,
    borderRadius: 8,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    paddingVertical: 11,
  },
  backDrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  fixedDrop: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
