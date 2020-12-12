import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home'
import WalletScreen from './screens/wallet'
import PayScreen from './screens/pay'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import PayButton from './components/pay-button'

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },

    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },

    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },

    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
}

export default function Navigation() {
    return (
        <Tab.Navigator

            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Pay') {
                        return (
                            <PayButton
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        )
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}

            tabBarOptions={{

                style: {
                    backgroundColor: '#131418',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    paddingBottom: 5,
                },

                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Início'
                }}
            />

            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    title: 'Carteira'
                }}
            />

            <Tab.Screen
                name="Pay"
                component={PayScreen}
                options={{
                    title: ''
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={WalletScreen}
                options={{
                    title: 'Notificações'
                }}
            />

            <Tab.Screen
                name="Settings"
                component={PayScreen}
                options={{
                    title: 'Ajustes'
                }}
            />

        </Tab.Navigator >
    )
}