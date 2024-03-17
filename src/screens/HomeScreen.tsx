import React, { useEffect, useMemo, useState } from 'react';

import { FocusContext, Screen, ScrollView } from '@flexn/create';
import { StyleSheet, Platform, View } from 'react-native';
import { BannerCrousel } from '../components/BannerCrousel';
import { TopTenList } from '../components/TopTenList';

interface HomeScreenProps {
	focusContext?: FocusContext;
}

const ScreenContainer = Platform.isTV ? Screen : View;

const HomeScreen = ({ focusContext }: HomeScreenProps) => {
	return (
		<ScrollView
			contentContainerStyle={styles.scrollStyle}
			focusContext={focusContext}
		>
			<BannerCrousel />
			<TopTenList />
		</ScrollView>
	);
};

export { HomeScreen };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	scrollStyle: {
		paddingBottom: 100
	}
});
