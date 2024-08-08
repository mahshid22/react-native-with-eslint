import icoMoonConfig from '../../../selection.json';
import {useTheme} from '../../theme';
import {generateBasedOnPaletteColor as formatColor} from '../../utils/generatePaletteColor';
import {IconProps, IconSizes} from './types';
import {Pressable, View} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import IcoMoon from "../../../assets/CustomIcon"
export const ISize: Record<IconSizes, number> = {
  xs: 9,
  sm: 15,
  md: 19,
  lg: 28,
  xl: 42,
  xxl: 57,
};

// const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig);
export const Icon = (props: any) => {
  // const {theme} = useTheme();
  const {
    color,
    name,
    size,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    Component = onPress || onLongPress || onPressIn || onPressOut
      ? Pressable
      : View,
  } = props;

  const iconColor = color || 'black'
  // let iconSize = typeof size === 'number' ? size : ISize[size!];
  return (
    <Component
      {...{
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        ...props,
      }}
      accessibilityRole={
        onPress || onLongPress || onPressIn || onPressOut ? 'button' : 'none'
      }
      accessibilityLabel={name}>
      <IcoMoon name={name!}  color={iconColor} />
    </Component>
  );
};

