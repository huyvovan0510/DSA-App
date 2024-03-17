import React from 'react';
import { StyleSheet } from '@flexn/create';
import { Image, PixelRatio, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CROUSEL_HEIGHT, HEIGHT_SCREEN, WIDH_SCREEN, scale } from '../utils';
import { Error } from '../assets/images';

const CarouselErrror = () => {
	return (
		<Pressable style={styles.postesContainer}>
			<LinearGradient
				colors={['#000', 'transparent']}
				start={{ x: 0, y: 1 }}
				end={{ x: 0, y: 0 }}
				style={styles.gradientContent}
			>
				<View style={styles.posterContent}>
					<Image source={Error} style={styles.errorImage} />
					<Text style={styles.txtError}>
						{'Something when worng please reload agian!'}
					</Text>
				</View>
			</LinearGradient>
		</Pressable>
	);
};

export { CarouselErrror };

const styles = StyleSheet.create({
	postesContainer: {
		width: WIDH_SCREEN,
		height: CROUSEL_HEIGHT,
		backgroundColor: '#292a2c'
	},
	btnContainer: {
		borderWidth: 0
	},
	posterBackdrop: { ...StyleSheet.absoluteFillObject },
	gradientContent: { flex: 1, justifyContent: 'center' },
	posterContent: {
		paddingHorizontal: scale(250),
		justifyContent: 'center',
		alignItems: 'center'
	},
	posterImg: {
		width: scale(400),
		height: scale(600),
		borderRadius: scale(20),
		backgroundColor: '#292a2c'
	},
	item: {
		borderRadius: scale(20),
		overflow: 'hidden',
		backgroundColor: '#292a2c',
		width: scale(400),
		height: scale(600),
		marginRight: scale(30)
	},
	fimInfo: { marginLeft: scale(30), flex: 1, justifyContent: 'center' },
	title: {
		width: scale(WIDH_SCREEN / 3),
		height: scale(50),
		backgroundColor: '#292a2c',
		marginBottom: scale(20),
		borderRadius: scale(16)
	},
	rating: {
		width: scale(WIDH_SCREEN / 2.5),
		height: scale(50),
		backgroundColor: '#292a2c',
		marginBottom: scale(20),
		borderRadius: scale(16)
	},
	subTitle: {
		width: scale(WIDH_SCREEN / 2),
		height: scale(50),
		backgroundColor: '#292a2c',
		marginBottom: scale(20),
		borderRadius: scale(16)
	},
	errorImage: { width: scale(300), height: scale(300) },
	txtError: {
		color: '#fff',
		fontSize: scale(30),
		marginTop: scale(30),
		textAlign: 'center'
	}
});
