import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { supabase } from '@/app/lib/supabase';
import { useNavigation } from '@react-navigation/native';
import Account from "@/app/components/Account";

export default function ProfileScreen() {
    const navigation = useNavigation();
    const session = supabase.auth.session();

    const signOut = async () => {
        await supabase.auth.signOut();
        // Navigation is handled by AppNavigator when auth state changes
    };

    return (
        <View style={styles.container}>
            {session && (
                <>
                    <Account session={session} />
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Se déconnecter"
                            onPress={signOut}
                            buttonStyle={styles.button}
                        />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        padding: 20,
    },
    button: {
        backgroundColor: '#ff3b30',
        borderRadius: 5,
        paddingVertical: 12,
    },
});