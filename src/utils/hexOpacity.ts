import {HexOpacity} from '../theme/types';

export const hexOpacity: HexOpacity = (color, alpha = 1) => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
    const _opacity = Math.round(Math.min(Math.max(alpha || 1, 0), 1) * 255);
    return color.substring(0, 7) + _opacity.toString(16).toUpperCase();
  }
  throw new Error(`${color} is not a valid HEX color`);
};
