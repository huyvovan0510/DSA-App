import React, { useContext, useEffect, useState } from 'react';
import {
	Text,
	Image,
	View,
	PixelRatio,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	TVFocusGuideView
} from 'react-native';
import { Api } from '@rnv/renative';
import {
	ICON_LOGO,
	CONFIG,
	ThemeProvider,
	ThemeContext,
	testProps
} from '../config';
import packageJson from '../../package.json';

const App = () => (
	<ThemeProvider>
		<AppThemed />
	</ThemeProvider>
);

const AppThemed = () => {
	const { theme, toggle }: any = useContext(ThemeContext);

	const [pixelRatio, setPixelRatio] = useState(1);
	const [fontScale, setFontScale] = useState(1);

	useEffect(() => {
		setPixelRatio(PixelRatio.get());
		setFontScale(PixelRatio.getFontScale());
	}, []);

	const data = Array.from(Array(10).keys());

	const renderItem = ({ item, index }) => {
		return (
			<TVFocusGuideView>
				<TouchableOpacity
					style={styles.items}
					onPress={() => {
						console.log('\x1b[35;1m ~ renderItem ~ onPress:', index);
					}}
				>
					<View>
						<Text>{index}</Text>
					</View>
				</TouchableOpacity>
			</TVFocusGuideView>
		);
	};

	return (
		<View style={theme.styles.container}>
			<Image
				style={theme.styles.image}
				source={ICON_LOGO}
				{...testProps('template-starter-home-screen-renative-image')}
			/>
			<FlatList data={data} renderItem={renderItem} />
		</View>
	);
};

export default App;
const styles = StyleSheet.create({
	items: {
		margin: 30,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		backgroundColor: 'red'
	}
});
