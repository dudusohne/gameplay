import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

    export const styles = StyleSheet.create({
        container: {
            height: 56,
            width: '100%',
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center'
        },
        title: {
            flex: 1,
            color: theme.colors.heading,
            fontSize: 15,
            textAlign: 'center',
            fontFamily: theme.fonts.title500
        },
        iconWrapper: {
            width: 56,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 1,
            borderColor: theme.colors.line
        },
        icon: {
            height: 18,
            width: 24
        }
    });