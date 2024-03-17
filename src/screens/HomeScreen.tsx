import React from 'react';

import { FocusContext, ScrollView } from '@flexn/create';
import { StyleSheet } from 'react-native';
import { BannerCrousel } from '../components/BannerCrousel';
import { TopTenList } from '../components/TopTenList';

interface HomeScreenProps {
	focusContext?: FocusContext;
}

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
