import React, { useEffect, useState } from 'react';

import { FocusContext } from '@flexn/create';
import {
	StyleSheet,
	Text,
	Image,
	View,
	Platform,
	FlatList
} from 'react-native';
import { DSAServices } from '../services';
import { CROUSEL_HEIGHT, HEIGHT_SCREEN, WIDH_SCREEN, scale } from '../utils';
import { BaseButton } from './BaseButton';
import { MovieData } from '../mock';
import { CarouselSkeleton } from './CarouselSkeleton';
import LinearGradient from 'react-native-linear-gradient';
import { CarouselErrror } from './CarouselErrror';

interface BannerCrouselProps {
	focusContext?: FocusContext;
}

const BannerCrousel = ({ focusContext }: BannerCrouselProps) => {
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

	const renderPosters = ({ item }) => {
		return (
			<BaseButton
				focusType="background"
				focusContext={focusContext}
				onPress={() => {
					alert(item?.titleText?.text);
				}}
			>
				<View style={styles.postesContainer}>
					<Image
						blurRadius={100}
						source={{ uri: item?.primaryImage?.imageUrl }}
						style={styles.posterBackdrop}
						resizeMode="stretch"
					/>
					<LinearGradient
						colors={['#000', 'transparent']}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0 }}
						style={styles.gradientContent}
					>
						<View style={styles.posterContent}>
							<Image
								source={{ uri: item?.primaryImage?.imageUrl }}
								style={styles.posterImg}
								resizeMode="stretch"
							/>
							<View style={styles.fimInfo}>
								<Text style={styles.fimTitle}>{item?.titleText?.text}</Text>

								<Text
									style={styles.fimSource}
								>{`IMDb: ${item?.ratingsSummary?.aggregateRating}/10 | ${item?.titleCertificate?.rating} | ${item?.releaseDate?.country.id} | ${item?.releaseDate.day}-${item?.releaseDate.month}-${item?.releaseDate.year}`}</Text>

								<Text style={styles.desc}>
									{item?.plot?.plotText.plainText}
								</Text>
								<View>
									<View style={styles.categoryBox}>
										<Text style={styles.categoryLabel}>
											{item?.titleType?.text}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</LinearGradient>
				</View>
			</BaseButton>
		);
	};

	if (isError) return <CarouselErrror />;

	return (
		<>
			{topTenData?.length > 0 ? (
				<FlatList
					data={topTenData || []}
					keyExtractor={(_, index) => `${index}`}
					renderItem={renderPosters}
					horizontal
					pagingEnabled
				/>
			) : (
				<CarouselSkeleton />
			)}
		</>
	);
};

export { BannerCrousel };

const styles = StyleSheet.create({
	postesContainer: {
		width: WIDH_SCREEN,
		height: CROUSEL_HEIGHT
	},
	content: {},
	posterBackdrop: { ...StyleSheet.absoluteFillObject },
	gradientContent: { flex: 1, justifyContent: 'center' },
	posterContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',

		paddingHorizontal: Platform.isTV
			? '15%'
			: Platform.select({
					web: '15%',
					ios: 16,
					android: 16
			  })
	},
	posterImg: { width: scale(400), height: scale(600), borderRadius: scale(20) },
	fimInfo: { marginLeft: scale(30), flex: 1, justifyContent: 'center' },
	fimTitle: { color: '#fff', fontSize: scale(60), fontWeight: 'bold' },
	desc: {
		color: '#fff',
		fontSize: scale(30),
		fontWeight: 'bold',
		marginTop: scale(20)
	},
	fimSource: { color: '#fff', fontSize: scale(18), marginTop: scale(10) },
	categoryBox: {
		alignSelf: 'flex-start',
		paddingVertical: scale(20),
		paddingHorizontal: scale(25),
		backgroundColor: 'red',
		borderRadius: scale(20),
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: scale(20)
	},
	categoryLabel: { color: '#fff', fontSize: scale(20) }
});
