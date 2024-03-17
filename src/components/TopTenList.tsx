import React, { useEffect, useState } from 'react';

import { StyleSheet, Pressable, Screen, FocusContext } from '@flexn/create';
import { FlatList, Image, ImageBackground, Text, View } from 'react-native';
import { DSAServices } from '../services';
import { BaseButton } from './BaseButton';
import { MovieData } from '../mock';
import LinearGradient from 'react-native-linear-gradient';
import { HorizontalSkeleton } from './HorizontalSkeleton';
import { Empty } from '../assets/images';
import { scale } from '../utils';

interface TopTenListProps {
	focusContext?: FocusContext;
}

const TopTenList = ({ focusContext }: TopTenListProps) => {
	const [topTenData, setTopTenData] = useState([]);
	const [isError, setIsError] = useState(false);

	const callBE = async () => {
		try {
			const respone = await DSAServices.getTopTenList();
			const { data } = respone || {};

			setTopTenData(data);
		} catch (error) {
			setIsError(true);
		}
	};
	useEffect(() => {
		callBE();
	}, []);

	const renderItem = ({ item }) => {
		return (
			<BaseButton
				focusContext={focusContext}
				focusType="border"
				onPress={() => {
					alert(item?.titleText?.text);
				}}
			>
				<ImageBackground
					source={{ uri: item?.primaryImage?.imageUrl }}
					style={styles.thumbImage}
				>
					<LinearGradient
						colors={['#000', 'transparent']}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0 }}
						style={styles.gradientContent}
					>
						<Text style={styles.fimTitle}>{item?.titleText?.text}</Text>

						<Text style={styles.fimRating}>
							{`IMDb: ${item?.ratingsSummary?.aggregateRating}/10`}
						</Text>
						<Text style={styles.fimDesc} numberOfLines={2}>
							{item?.plot?.plotText.plainText}
						</Text>
					</LinearGradient>
				</ImageBackground>
			</BaseButton>
		);
	};

	const renderLoading = () => <HorizontalSkeleton />;

	return (
		<Screen style={styles.listContainer}>
			{isError ? (
				<Pressable style={styles.errorSpace} focusContext={focusContext}>
					<Image source={Empty} style={styles.emptyBoxImage} />
					<Text style={styles.txtError}>
						{'Something when worng please reload agian!'}
					</Text>
				</Pressable>
			) : (
				<>
					<Text style={styles.title}>{'Top Tredning'}</Text>
					<FlatList
						ListEmptyComponent={renderLoading}
						data={topTenData}
						renderItem={renderItem}
						horizontal
						keyExtractor={(item, index) => `${index}`}
						ItemSeparatorComponent={() => <View style={{ width: 30 }}></View>}
						contentContainerStyle={{ paddingHorizontal: 30 }}
					/>
				</>
			)}
		</Screen>
	);
};

export { TopTenList };

const styles = StyleSheet.create({
	listContainer: {
		marginTop: -scale(100),
		paddingBottom: 100
	},
	title: {
		color: '#fff',
		fontSize: scale(40),
		fontWeight: '700',
		marginLeft: scale(60),
		marginBottom: scale(30)
	},
	thumbImage: {
		width: scale(400),
		height: scale(600),
		borderRadius: scale(20),
		overflow: 'hidden'
	},
	gradientContent: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: scale(10),
		paddingBottom: scale(20)
	},
	fimTitle: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: scale(30),
		marginBottom: scale(10)
	},
	fimRating: {
		color: '#fff',
		fontSize: scale(14),
		marginBottom: scale(10)
	},
	fimDesc: { color: '#fff', fontSize: scale(18) },
	errorSpace: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	emptyBoxImage: {
		width: scale(200),
		height: scale(200),
		marginBottom: scale(40)
	},
	txtError: { color: '#fff', fontSize: scale(30) }
});
