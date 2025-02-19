import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function EvenementScreen(){
   // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue dans la création d'évènements</Text>
            <Text style={styles.subtitle}>Vous êtes connecté</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
});