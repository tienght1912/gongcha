import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Home from './Home'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.formLogin}>
                <TextInput
                style={styles.formUserName}
                    // placeHolder="Enter username"
                />
            </View>
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={()=> navigation.navigate('Home')}
            >
                <Text style={styles.txtButton}>Go Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    formUserName:{
        backgroundColor:"#ccc",
        width:240,
        height:40,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#000"
    },
    btnLogin: {
        width: 140,
        height: 40,
        backgroundColor: "#e17055",
        justifyContent: "center",
        alignItems: "center"
    },
    txtButton: {
        color: "#fff"
    }
})
