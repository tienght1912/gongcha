import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Home from './Home'

export default function Login({ navigation }) {
    return (
        <View>
            <Text>Login</Text>
            <Button 
                title="Welcom home!"
                onPress={()=>navigation.navigate(Home)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
