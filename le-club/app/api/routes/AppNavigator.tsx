import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/app/lib/supabase';

// Screens
import AuthScreen from "@/app/api/screens/AuthScreen";
import HomeScreen from "@/app/api/screens/HomeScreen";
import ProfileScreen from "@/app/api/screens/ProfileScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return null; // Or a loading spinner
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {session ? (
                    // Protected routes (user is authenticated)
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                    </>
                ) : (
                    // Public routes (user is not authenticated)
                    <Stack.Screen
                        name="Auth"
                        component={AuthScreen}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}