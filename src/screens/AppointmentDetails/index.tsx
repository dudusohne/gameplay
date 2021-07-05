import React from 'react';

import { View, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Fontisto } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import bannerImg from '../../assets/banner.png';
import { styles } from './styles';

export function AppointmentDetails() {
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
            source={bannerImg}
            style={styles.banner}
            >

            </ImageBackground>

        </Background>
    );
}