import React from 'react';

import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function AppointmentCreate() {

    return (
        <Background>
            <Header
                title="Agendar partida"
            />


        </Background>
    );
}