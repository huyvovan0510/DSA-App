import { Dimensions, Platform } from 'react-native';

const { width: WIDH_SCREEN, height: HEIGHT_SCREEN } = Dimensions.get('screen');

export { WIDH_SCREEN, HEIGHT_SCREEN };

export const CROUSEL_HEIGHT = Platform.isTV
	? HEIGHT_SCREEN * 0.9
	: HEIGHT_SCREEN * 0.6;

// Function to scale sizes based on screen dimensions and pixel density
export const scale = (size) => {
	if (!Platform.isTV) {
		return size / 2.5;
	}
	return size;
};
