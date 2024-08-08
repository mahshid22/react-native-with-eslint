import {DimensionsScale, ModerateScale, Units} from '../theme';
import {Dimensions} from 'react-native';

const {width:sWidth, height:sHeight} = Dimensions.get('window');


//this is for web environments
const width=Math.min(sWidth,450);
const height=Math.min(sHeight,1000);

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale: DimensionsScale = size => {
  if (typeof size === 'number') return (width / guidelineBaseWidth) * size;
  if (typeof size === 'string') return (width / guidelineBaseWidth) * +size;
  return undefined;
};
const verticalScale: DimensionsScale = size => {
  if (typeof size === 'number') return (height / guidelineBaseHeight) * size;
  if (typeof size === 'string') return (height / guidelineBaseHeight) * +size;
  return undefined;
};
const moderateScale: ModerateScale = (size, factor = 0.5) => {
  if (typeof size === 'number')
    return size + (horizontalScale(size)! - size) * factor;
  if (typeof size === 'string')
    return +size + (horizontalScale(size)! - +size) * factor;
  return undefined;
};

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  width as screenWidth,
  height as screenHeight,
};
