import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Home from './Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Welcome!</Text>
            </View>
            <View style={styles.footer}>   
                <Text style={styles.text_footer}>Email</Text> 
                <View style={styles.action}>
                    <FontAwesome
                        name="user"
                        size={20}
                        color="#2d3436"
                    />
                    <TextInput
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        style={styles.inputEmail}
                    />
                </View>
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
        // justifyContent: "center",
        // alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    inputEmail: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        color:"#000",
        
    },
    inputPass: {
        height: 40,
        width: "100%",
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
