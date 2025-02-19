// index.tsx
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/app/lib/supabase";
import Account from "@/app/components/Account";
import Auth from "@/app/components/AuthForm";
import HomeScreen from "@/app/api/screens/HomeScreen";

const Stack = createStackNavigator();

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
        <Stack.Navigator>
            {session && session.user ? (
                <>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Accueil' }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={() => <Account session={session} />}
                        options={{ title: 'Profil' }}
                    />
                </>
            ) : (
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
}