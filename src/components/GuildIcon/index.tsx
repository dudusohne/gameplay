import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://logo-logos.com/wp-content/uploads/2018/03/Discord_icon.png'
    
    return (

        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}