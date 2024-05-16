import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const ProfileScreen = () => {

    // TODO: handle logout
    const handleLogout = () => {
        // sign out
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("User has been signed out")
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("The following error occurred: " + errorCode + ": " + errorMessage)
        });
    }

    return (
        <SafeAreaView>
            <View style={{padding:20}}>
                <Text>Profile</Text>

                {/* TODO: Show logged in user info */}
                <Text>Email here</Text>
                <Text>Username here</Text>

                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen