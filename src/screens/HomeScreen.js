import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        id: '1',
        nameProduct: 'Long Sleeves Polka Dots',
        imageP: 'https://res.cloudinary.com/djlbfjouc/image/upload/v1581158167/sbiuoziiqi5gkuvrsymv.jpg',
        cost: 900,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '2',
        nameProduct: 'Brown Jacket',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158056%2Fdqtdtglewxjvig4x7rlk.jpg&w=640&q=75',
        cost: 800,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '3',
        nameProduct: 'Sleeveless Shirt',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581157817%2Fkx5kld8ndqqpfqemslc2.jpg&w=640&q=75',
        cost: 400,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '4',
        nameProduct: 'White Long Sleeves',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581157717%2Fz9pytwztom7gj2dri1tb.jpg&w=640&q=75',
        cost: 800,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '5',
        nameProduct: 'Black leather Jacket',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581157604%2Fqfebd5mqwqcwbjsbehxr.jpg&w=640&q=75',
        cost: 700,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '6',
        nameProduct: 'Whote Floral Dress',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581157521%2Fn1vilxhjdrdhrppu4u5m.jpg&w=640&q=75',
        cost: 1200,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '7',
        nameProduct: 'Herschel Suppy Long Sleeves',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582456742%2Flongsleeves-hershel_mampai.jpg&w=640&q=75',
        cost: 900,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '8',
        nameProduct: 'Femmo T-shirt',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156257%2Fndixpyvh4goiegf8c3ws.jpg&w=640&q=75',
        cost: 500,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '9',
        nameProduct: 'Pieces Mettalic Printed',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156228%2Fbumiptjx37aqwkez2x4o.jpg&w=640&q=75',
        cost: 500,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },
    {
        id: '10',
        nameProduct: 'Shirt in strectch cotton',
        imageP: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156196%2Fhefaqrcrdhxmabag1ozl.jpg&w=640&q=75',
        cost: 1000,
        unit: "$",
        description: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.'
    },

];



export default function HomeScreen({ navigation }) {
    const renderItemV = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen')}
            style={styles.itemV}>
            <Image
                style={styles.itemImage}
                source={{ uri: item.imageP }}
            />
            <Text style={styles.nameProduct}>{item.nameProduct}</Text>
            <Text style={styles.cost}>{item.cost}{item.unit}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fdcb6e' barStyle="light-content" />
            <View style={styles.header}>
                <View style={styles.logo}>
                    <MaterialCommunityIcons
                        name="shopping"
                        size={30}
                        color="#fff"
                    />
                </View>
                <View style={styles.drawer}>
                    <FontAwesome
                        name="sign-out"
                        size={30}
                        color="#fff"
                        onPress={()=>navigation.navigate('LoginScreen')}
                    />
                </View>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={styles.flatListV}
                    data={DATA}
                    renderItem={renderItemV}
                    numColumns={2}
                />
            </View>
            {/* <View style={styles.footer}>
                <Text style={styles.tilteFooter}>No more Product. You have reached the end</Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.btnSignUp}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.textButton}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnSignIn}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.textButton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"center",
        // alignItems:"center",
        backgroundColor: "#fdcb6e",
    },
    header: {
        height: 60,
        // backgroundColor:"#fff",
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "#fab1a0",
        paddingHorizontal: 16,
        flex: 1
    },
    logo: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    logoImage: {

    },
    drawer: {
        flex: 5,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    content: {
        width: "100%",
        flex: 8,
        paddingTop: 4,
        paddingBottom:4,
    },
    flatListV: {
        paddingHorizontal: 0,
    },
    itemV: {
        flexDirection: "column",
        marginBottom: 12,
        width: "50%",
        // justifyContent:"center",
        // alignItems:"center"
    },
    itemImage: {
        width: 140,
        height: 180,
        alignSelf: "center",
    },
    nameProduct: {
        marginLeft: 20,
        marginTop: 4,
        color: "#000",
        fontSize: 16,
        width: 120
    },
    cost: {
        marginLeft: 20,
        marginTop: 4,
        fontWeight: "700",
        color: "#ff0000"
    },
    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tilteFooter: {
        marginTop:4,
        color: "#900"
    },
    // button:{
    //     flexDirection:"row",
    //     width:"100%",
    //     paddingHorizontal:16,
    //     flex:1,
    // },
    btnSignUp:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    btnSignIn:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    textButton:{
        color:"#fff",
        fontSize:16,
    }
})
