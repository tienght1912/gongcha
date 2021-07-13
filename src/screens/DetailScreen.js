import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DATA = [
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
export default function DetailScreen() {
    const renderItemV = ({ item }) => (
        <View
            // onPress={() => navigation.navigate('DetailScreen')}
            style={styles.itemV}>
            <Image
                style={styles.itemImage}
                source={{ uri: item.imageP }}
            />
            <Text style={styles.nameProduct}>{item.nameProduct}</Text>
            <Text style={styles.cost}>{item.cost}{item.unit}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1b262c' barStyle="light-content" />
            <View style={styles.header}>
                <Image
                    style={styles.imgDetail}
                    source={require('../assets/sp1.jpg')}
                />
                <View style={styles.box1}>
                    <Text style={styles.nameProduct}>Brown Jacket</Text>
                    <AntDesign
                        size={20}
                        color="#fff"
                        name="hearto"
                        style={styles.iconHeart}
                    />
                </View>
                <Text style={styles.costDetail}>900$</Text>
                <Text style={styles.Des}>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</Text>
                <View style={styles.box2}>
                    <Text style={styles.textCount}>Count</Text>
                    <TouchableOpacity
                        style={styles.btnBuy}
                    >
                        <Text style={styles.textBuy}>Add to cart</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footer}>
                <Text style={styles.titleFooter}>Related Products</Text>
                <FlatList
                    style={styles.flatListV}
                    data={DATA}
                    renderItem={renderItemV}
                    numColumns={2}
                />
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
        flex: 3,
        // backgroundColor:"#900" 
    },
    imgDetail: {
        height: "100%",
        width: "100%",
        flex: 4
    },
    box1: {
        // flex:1,
        // backgroundColor: "green",
        flexDirection: "row",
        paddingHorizontal: 8,
        justifyContent: "space-between",
        paddingTop: 4
    },
    nameProduct: {
        color: "#fff",
        fontSize: 18
    },
    iconHeart: {
        marginRight:10,
        marginTop:4
    },
    costDetail:{
        color:"red",
        marginLeft:20,
        marginTop:4
    },
    Des: {
        // flex:1,
        marginHorizontal: 20,
        color: "#ccc",
        marginTop:4
    },
    box2: {
        // flex:1,
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        marginTop:4
    },
    textCount: {
        color: "#fff",
        alignSelf: "center",
        fontSize: 16
    },
    btnBuy: {
        backgroundColor: "#d63031",
        width: 140,
        height: 40,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    textBuy: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
    footer: {
        flex: 2
    },
    titleFooter:{
        color:"#fff",
        fontSize:24,
        marginHorizontal:20,
        marginTop:4
    },
    flatListV: {
        paddingHorizontal: 20,
        marginTop:4
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
        alignSelf: "center"
    },
    nameProduct: {
        marginLeft: 12,
        marginTop: 4,
        color: "#fff",
        fontSize: 16,
        width: 120
    },
    cost: {
        marginLeft: 12,
        marginTop: 4,
        fontWeight: "700",
        color: "#ff0000"
    },
})
