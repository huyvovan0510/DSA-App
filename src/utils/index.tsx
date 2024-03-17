import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: WIDH_SCREEN, height: HEIGHT_SCREEN } = Dimensions.get('window');

export { WIDH_SCREEN, HEIGHT_SCREEN };

export const CROUSEL_HEIGHT = Platform.isTV
	? HEIGHT_SCREEN * 0.9
	: HEIGHT_SCREEN * 0.6;

// Function to scale sizes based on screen dimensions and pixel density
export const scale = (size) => {
	if (!Platform.isTV) {
		return size / 2.5;
	}
	return Platform.select({
		android: size / 2.5,
		ios: size
	});
};

export function wp(percentage) {
	const value = (percentage * HEIGHT_SCREEN) / 100;
	return Math.round(value);
}
