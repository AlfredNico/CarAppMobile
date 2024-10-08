import { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "screens/Home/HomeScreen";
import { MessageScreen } from "screens/Message/MessageScreen";
import { SettingScreen } from "screens/Settings/SettingScreen";
import { Header } from "components/header/Header";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export const AppNavigator: FC = () => {
    return <NavigationContainer>
         <Stack.Navigator screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: route.name === 'Details' ? '#6200ee' : '#ffffff',
          },
          headerTintColor: route.name === 'Details' ? '#ffffff' : '#000000',
        })}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    header: () => <Header navigation={navigation} />,
                })}
            />
            <Stack.Screen
                name="Message"
                component={MessageScreen}
                options={({ navigation }) => ({
                    header: () => <Header navigation={navigation} />,
                })}
            />
             <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={({ navigation }) => ({
                    header: () => <Header navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

