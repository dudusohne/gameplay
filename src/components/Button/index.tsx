import React from 'react';

import { Text, Image, View, } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: String;
}

export function Button({ title, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>

    )
}
