import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThirdScreen = ({route}:any) => {
     
  return (
    <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
      <Text>{route.params.textItem}</Text>
    </View>
  )
}

export default ThirdScreen

const styles = StyleSheet.create({})