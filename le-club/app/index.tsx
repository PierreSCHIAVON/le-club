import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/app/lib/supabase";
import Account from "@/app/components/Account";
import Auth from "@/app/components/AuthForm";
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/app/api/screens/HomeScreen';
import ProfileScreen from '@/app/api/screens/ProfileScreen';
import EvenementScreen from '@/app/api/screens/EvenementScreen';

const Tab = createBottomTabNavigator();

export default function Index() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        session && session.user ? (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Evenement') {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        }
                        return <Ionicons name={iconName as any} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen
                    name="Profile"
                    component={() => <Account session={session} />}
                />
                <Tab.Screen
                    name="Evenement"
                    component={EvenementScreen}
                />
            </Tab.Navigator>
        ) : (
            <Auth />
        )
    );
}