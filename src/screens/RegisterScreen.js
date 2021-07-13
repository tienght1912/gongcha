import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Alert,
    Image,
    ImageBackground 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function RegisterScreen({navigation}) {
    const [data, setdata] = React.useState({
        email: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
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
            password:val,
        })
    }
    const handleConfirmPasswordChange = (val) => {
        setdata({
            ...data,
            confirm_password: val,
        });
    }
    const updateSecureTextEntry = () => {
        setdata({
            ...data,
            secureTextEntry: !data.secureTextEntry

        })
    }
    const updateConfirmSecureTextEntry = () => {
        setdata({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry

        })
    }    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fdcb6e' barStyle="light-content" />
            <View style={styles.header}>
                <ImageBackground
                    source={require('../assets/logo.png')}
                    style={styles.banner}
                >
                    <Text style={[styles.titleHeader,{marginTop:30, marginLeft:40}]}>Create</Text>
                    <Text style={[styles.titleHeader,{marginLeft:230, marginTop:-30}]}>your account!</Text>
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
                        onPress={updateSecureTextEntry}
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
                {/* confirm */}
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        size={20}
                        color="#2d3436"
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={!data.confirm_secureTextEntry ? false : true}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
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
                {/* confirm */}
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('BottomTabs')}
                        style={styles.btnSignUp}
                    >
                        <Text style={styles.textSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnSignIn}
                        onPress={() => navigation.goBack()}
                    >

                        <Text style={styles.textSignIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
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
        flexDirection:"row",
        backgroundColor: "#fdcb6e",
        // justifyContent: "center",
        // alignItems:"center"
    },
    titleHeader: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
        marginLeft:20,
    },
    banner:{
        width:"100%",
        height:"100%",
        flex:1,
        marginLeft:-20
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
    btnSignUp: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        backgroundColor:"#fdcb6e",
        alignItems:"center",
        justifyContent:"center"
    },
    textSignUp: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    btnSignIn:{
        borderColor:"#fdcb6e",
        borderWidth:1,
        borderRadius:10,
        width:"100%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        marginTop:15
    },
    textSignIn: {
        color: "#fdcb6e",
        fontSize: 18,
        fontWeight: "bold"
    },
})
