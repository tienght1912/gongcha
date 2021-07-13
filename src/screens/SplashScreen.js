import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text>Stayed</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})
