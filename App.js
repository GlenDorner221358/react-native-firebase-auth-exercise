import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// TODO: Navigation Container

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    // var currentUser = auth.currentUser
    // console.log("Current User - " + currentUser?.email ?? "none")

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        console.log("User logged in..." + user.email)
      } else {
        setLoggedIn(false)
        console.log("No user logged in :(")
      }
    })
    return unsubscribe
    
  }, [])

  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    {loggedIn ? (
      <ProfileScreen />
    ): (
      <LoginScreen />
    )}
    </>

    // STACK NAVIGATION
    
  );
}

