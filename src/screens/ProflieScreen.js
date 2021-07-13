import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function ProflieScreen() {
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
    },
})
