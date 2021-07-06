import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';
import { Background } from '../../components/Background';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);

    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseModal() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setOpenGuildsModal(false);
        setGuild(guildSelect);
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <Header
                    title="Agendar partida"
                />
                <Text style={[styles.label,
                { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
                >
                    Categoria
                </Text>

                <CategorySelect
                    hasCheckBox
                    setCategory={setCategory}
                    categorySelected={category}
                />

                <View style={styles.form}>
                    <RectButton onPress={handleOpenGuilds}>
                        <View style={styles.select}>
                            {
                                guild.icon ? <GuildIcon /> : <View style={styles.image} />
                            }

                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {guild.name ? guild.name : 'Selecione um servidor'}
                                </Text>
                            </View>
                            <Feather
                                name="chevron-right"
                                size={18}
                                color={theme.colors.heading}
                            />

                        </View>

                    </RectButton>

                    <View style={styles.field}>
                        <View>
                            <Text style={styles.label}>
                                Dia e mês
                            </Text>

                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label}>
                                Hora e minuto
                            </Text>

                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.field, { marginBottom: 12 }]}>
                        <Text style={styles.label}>
                            Descrição
                        </Text>
                        <Text style={styles.caracteresLimit}>
                            Max. 100 caracteres
                        </Text>
                    </View>

                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />

                    <View style={styles.footer}>
                        <Button
                            title="Acessar"
                        />
                    </View>
                </View>
            </ScrollView>
            <ModalView visible={openGuildsModal} closeModal={handleCloseModal}>
                <Guilds
                    handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}