import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    // Platform,
    TouchableOpacity,
    TextInput,
    StatusBar,
    // Alert,
    // Image,
    ImageBackground 
} from 'react-native';
// import Home from './Home';
// import * as Animatable from 'react-native-animatable';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

export default function Login({ navigation }) {
    const [data, setdata] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    const textInputChange = (val) => {
        if (val.trim().length >= 5) {
            setdata({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setdata({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    }
    const handlePasswordChange = (val) => {
        setdata({
            ...data,
            password: val,
        });
    }
    const updatesecureTextEntry = () => {
        setdata({
            ...data,
            secureTextEntry: !data.secureTextEntry

        })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1b262c' barStyle="light-content" />
            <View style={styles.header}>
                <ImageBackground
                    source={require('../assets/logo.png')}
                    style={styles.banner}
                >
                    <Text style={styles.titleHeader}>Welcome!</Text>
                </ImageBackground>
            </View>
            <View style={styles.footer}>
                {/* email */}
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user"
                        size={20}
                        color="#2d3436"
                    />
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="#666666"
                        style={styles.input}
                        onChangeText={(val) => textInputChange(val)}
                        autoCapitalize="none"
                    />
                    {data.check_textInputChange ?
                        <Feather
                            name="check-circle"
                            size={18}
                            color="green"
                        // #fdcb6e
                        />
                        : null}
                </View>
                {/* email */}
                {/* password */}
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        size={20}
                        color="#2d3436"
                    />
                    <TextInput
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={!data.secureTextEntry ? false : true}
                        onChangeText={(val) => handlePasswordChange(val)}
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={updatesecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                size={18}
                                color="grey"
                            // #fdcb6e
                            />
                            :
                            <Feather
                                name="eye"
                                size={18}
                                color="grey"
                            // #fdcb6e
                            />
                        }
                    </TouchableOpacity>
                </View>
                {/* password */}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.btnSignIn}
                        onPress={() => navigation.navigate('BottomTabs')}
                    >

                        <Text style={styles.textSignIn}>Sign In</Text>
                        {/* <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        /> */}

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Register')}
                        style={styles.btnSignUp}
                    >
                        <Text style={styles.textSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b262c",
    },
    header: {
        flex: 1,
        flexDirection:"row",
        backgroundColor: "#1b262c",
        // justifyContent: "center",
        // alignItems:"center"
    },
    banner:{
        width:"100%",
        height:"100%",
        flex:2,
        marginLeft:50,
    },
    titleHeader: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
        flex:1,
        marginTop:80,
        marginLeft:-30,
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
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: "#fff"
    },
    input: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    formUserName: {
        backgroundColor: "#ccc",
        width: 240,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000"
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    btnSignIn: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        backgroundColor:"#1b262c",
        alignItems:"center",
        justifyContent:"center"
    },
    textSignIn: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    btnSignUp:{
        marginTop:15,
        borderColor:"#1b262c",
        borderWidth:1,
        borderRadius:10,
        width:"100%",
        height:50,
        justifyContent:"center",
        alignItems:"center"
    },
    textSignUp: {
        color: "#1b262c",
        fontSize: 18,
        fontWeight: "bold"
    },
})
