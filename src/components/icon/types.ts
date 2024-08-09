import React from "react";
import { PressableProps } from "react-native";
import { Icons, IconSizes } from "./constant";

//

export interface IconProps extends Omit<PressableProps, "style" | "children"> {
  /**
   * name of icon.
   *
   */
  name?: Icons;
  /**
   * color of icon.
   *
   */
  color?: string;
  /**
   * size of icon.
   *
   */
  size?: IconSizes | number;
  /**
   * Component for enclosing element (eg: TouchableHighlight, View, etc).
   */
  Component?: typeof React.Component;
}
