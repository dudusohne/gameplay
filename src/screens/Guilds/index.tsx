import React from 'react';

import { View, FlatList } from 'react-native';

import { styles } from './styles';

export function Guilds() {
    const Guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                
            )}
            />

        </View>
    );
}