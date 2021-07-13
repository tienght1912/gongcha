import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Home from './Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Your Email"
                // value={text}
                />
                <TextInput
                    style={styles.inputPass}
                    placeholder="Your Password"
                    placeholderColor="#000"
                // value={password}
                />
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.txtButton}>Sign in</Text>
                    <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdcb6e",
    },
    header: {
        flex: 1,
        backgroundColor: "#fdcb6e",
        justifyContent: "center",
        padding: 20
        // alignItems:"center",
    },
    titleHeader: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "700",
    },
    footer: {
        flex: 2,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    inputEmail: {
        height: 40,
        width: "100%",
        margin: 12,
        borderWidth: 1,
    },
    inputPass: {
        height: 40,
        width: "100%",
        margin: 12,
        borderWidth: 1,
    },
    formUserName: {
        backgroundColor: "#ccc",
        width: 240,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000"
    },
    btnLogin: {
        flexDirection:"row",
        width: 140,
        height: 40,
        backgroundColor: "#e17055",
        justifyContent: "center",
        alignItems: "center"
    },
    txtButton: {
        color: "#fff",
        fontSize:16
    }
})
