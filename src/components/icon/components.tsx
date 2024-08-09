import React from 'react';
import { IconProps, IconSizes } from './types';
import { Pressable, View } from 'react-native';
import IcoMoon from '../../../assets/CustomIcon';
export const ISize: Record<IconSizes, number> = {
  xs: 9,
  sm: 15,
  md: 19,
  lg: 28,
  xl: 42,
  xxl: 57,
};

export const Icon = (props: IconProps) => {
  const {
    color,
    name,
    size = 'md',
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    Component = onPress || onLongPress || onPressIn || onPressOut ? Pressable : View,
  } = props;

  const iconColor = color || 'black';
  const iconSize = typeof size === 'number' ? size : ISize[size!];
  return (
    <Component
      {...{
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        ...props,
      }}
      accessibilityRole={onPress || onLongPress || onPressIn || onPressOut ? 'button' : 'none'}
      accessibilityLabel={name}>
      <IcoMoon name={name!} color={iconColor} size={iconSize} />
    </Component>
  );
};
