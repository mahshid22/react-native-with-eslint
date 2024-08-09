import {Colors, Shades, Pallette, Theme} from '../theme/types';

export const generateBasedOnPaletteColor = (color: Colors, theme: Theme): string | undefined => {

  if(!color) return undefined
  const colorSplitted: string[] = color.replace(/\-/,'&').split('&');
  const Palettes = colorSplitted[0] as Pallette;
  const Shades = colorSplitted[1] as Shades;
  return (theme).color[Palettes][Shades] ;
};
