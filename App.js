import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    background:"#fff",
  },
})
