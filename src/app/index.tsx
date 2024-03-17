import React, { useContext, useEffect, useState } from 'react';
import {
	Text,
	Image,
	View,
	PixelRatio,
	TouchableOpacity,
	FlatList,
	Platform
} from 'react-native';
import { Api } from '@rnv/renative';
import { CONFIG, ThemeProvider, ThemeContext, testProps } from '../config';
import packageJson from '../../package.json';

import {
	App,
	StyleSheet,
	Pressable,
	Screen,
	FocusContext
} from '@flexn/create';
import { BaseButton } from '../components';
import { HomeScreen } from '../screens';

const Container = Platform.isTV ? App : View;
const Main = () => (
	<Container style={{ flex: 1 }}>
		<Screen style={styles.container}>
			<HomeScreen />
		</Screen>
	</Container>
);

export default Main;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	scrollStyle: {
		paddingBottom: 100
	}
});
