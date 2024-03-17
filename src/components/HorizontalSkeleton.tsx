import React from 'react';

import { StyleSheet } from '@flexn/create';
import { Pressable, ScrollView } from 'react-native';
import { scale } from '../utils';

const HorizontalSkeleton = () => {
	const data = Array.from(Array(10).keys());

	const renderSkeleton = (_, index) => {
		return <Pressable style={styles.item} key={`${index}`} />;
	};

	return (
		<ScrollView horizontal contentContainerStyle={styles.scrollStyle}>
			{data?.map(renderSkeleton)}
		</ScrollView>
	);
};

export { HorizontalSkeleton };

const styles = StyleSheet.create({
	btnContainer: {
		borderWidth: 0
	},
	item: {
		borderRadius: scale(20),
		overflow: 'hidden',
		backgroundColor: '#292a2c',
		width: scale(400),
		height: scale(600),
		marginRight: scale(30)
	},
	scrollStyle: {}
});
