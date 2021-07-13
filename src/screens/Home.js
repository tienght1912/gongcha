import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    
                </View>
                <View style={styles.drawer}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        // alignItems:"center",
        backgroundColor: "#1b262c",
    },
    header:{
        height:60,
        backgroundColor:"#fff",
        flexDirection:"row"
    }
})
