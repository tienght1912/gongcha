import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ProflieScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarClient}>
                    <View style={styles.circle1}>
                        <Image
                            style={styles.avatar}
                            source={require('../assets/avatar.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.nameClient}>
                    <Text style={styles.fullname}>Trần Hải Ngân</Text>
                </View>
                <View style={styles.statusClient}>
                    <Entypo
                        name="dot-single"
                        color="green"
                        size={30}
                        style={styles.dotStatusClient}
                    />
                    <Text style={styles.status}>Đang hoạt động</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.info}>
                    <FontAwesome
                        name="birthday-cake"
                        size={20}
                        color="#000"
                    />
                    <Text style={styles.placeClient}>Ngày sinh</Text>
                </View>
                <View style={styles.info}>
                    <MaterialIcons
                        name="place"
                        size={20}
                        color="#000"
                    />
                    <Text style={styles.placeClient}>Địa chỉ</Text>
                </View>
                <View style={styles.info}>
                    <Entypo
                        name="phone"
                        size={20}
                        color="#000"
                    />
                    <Text style={styles.placeClient}>Số điện thoại</Text>
                </View>
                <View style={styles.info}>
                    <FontAwesome
                        name="intersex"
                        size={20}
                        color="#000"
                    />
                    <Text style={styles.placeClient}>Giới tính</Text>
                </View>
                <View style={styles.info}>
                    <FontAwesome
                        name="bank"
                        size={20}
                        color="#000"
                    />
                    <Text style={styles.placeClient}>Ngân hàng</Text>
                </View>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('LoginScreen')}
                    style={styles.btnSignOut}>
                    <Text style={styles.textButton}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
    },
    avatarClient: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"#900"
    },
    circle1:{
        padding:8,
        width:180,
        height:180,
        borderRadius:180,
        borderWidth:1,
        borderColor:"#fdcb6e",
        marginTop:48
    },
    avatar: {
        width: 160,
        height: 160,
        borderRadius: 160,
        marginTop: 0,
    },
    nameClient: {
        justifyContent: "center",
        // alignItems: "center",
        marginTop: 8
    },
    fullname: {
        color: "#000",
        fontSize: 24,
        fontWeight: "700"
    },
    statusClient: {
        flexDirection: "row",
    },
    dotStatusClient: {
        marginTop: -6,
    },
    status: {
        justifyContent: "center",
    },
    footer: {
        flex: 1,
        backgroundColor: "#dfe6e9",
        // justifyContent: "center",
        // alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal:16,
    },
    info:{
        flexDirection:"row",
        paddingVertical:4,
        paddingHorizontal:8,
        // backgroundColor:"#900",
        alignItems:"center",
        borderBottomWidth:1,
        height:50,
        borderBottomColor:"#ccc",
    },
    placeClient:{
        color:"#000",
        // marginTop:-2,
        marginLeft:8,
        fontSize:16
    },
    btnSignOut:{
        backgroundColor:"#fdcb6e",
        height: 50,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        marginTop:16
    },
    textButton:{
        color:"#fff",
        fontSize:16
    },
})
