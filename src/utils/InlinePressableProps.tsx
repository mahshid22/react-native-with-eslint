import {PressableProps, GestureResponderEvent} from 'react-native';

export interface InlinePressableProps {
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: (event: GestureResponderEvent) => void;

  /**
   * Called when a touch is engaged before `onPress`.
   */
  onPressIn?: (event: GestureResponderEvent) => void;

  /**
   * Called when a touch is released before `onPress`.
   */
  onPressOut?: (event: GestureResponderEvent) => void;

  /**
   * Called when a long-tap gesture is detected.
   */
  onLongPress?: (event: GestureResponderEvent) => void;

  /**
   *  PressableProps except click handlers
   */
  pressableProps?: Omit<
    PressableProps,
    'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'
  >;
}
