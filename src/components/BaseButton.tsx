import React from 'react';
import { Pressable, Animator, FocusContext } from '@flexn/create';
import {
	StyleProp,
	ViewStyle,
	StyleSheet,
	TouchableOpacity,
	Platform
} from 'react-native';

interface BaseButtonProps {
	children: any;
	onPress?: () => void;
	focusType: 'scale' | 'background' | 'border';
	focusContext?: FocusContext;
	style?: StyleProp<ViewStyle>;
	focusKey?: string;
	focusRepeatContext?: {
		focusContext: any;
		index: number;
	};
}

const FOCOS_TYPE = {
	scale: {
		type: 'scale',
		focus: {
			scale: 1.5,
			duration: 500
		}
	},
	background: {
		type: 'background',
		focus: {
			backgroundColor: '#d7d7d7',
			duration: 500
		}
	},

	border: {
		type: 'border',
		focus: {
			borderWidth: 5,
			borderColor: '#d7d7d7',
			borderRadius: 20
		}
	}
};

const Touch = Platform.isTV ? Pressable : TouchableOpacity;

const BaseButton = ({
	children,
	onPress,
	focusType = 'border',
	focusContext,
	style,
	focusRepeatContext
}: BaseButtonProps) => {
	const animator = FOCOS_TYPE[focusType] as Animator;

	return (
		<Pressable
			focusRepeatContext={focusRepeatContext}
			style={[styles.btnContainer, style]}
			focusContext={focusContext}
			onPress={onPress}
			focusOptions={{
				animator
			}}
		>
			{children}
		</Pressable>
	);
};

export { BaseButton };

const styles = StyleSheet.create({
	btnContainer: {
		borderWidth: 0
	}
});
