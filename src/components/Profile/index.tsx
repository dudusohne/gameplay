import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar
                urlImage="https://github.com/dudusohne.png"
            />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Eduardo
                    </Text>
                </View>
                <Text style={styles.mensagem}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}