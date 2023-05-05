import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FirstScreen = ({navigation}:any) => {
  return (
    <View style={{flex:1,justifyContent:"center", padding:30,marginHorizontal:40}} >
     <TouchableOpacity>
        <View style={styles.btnStyle}>
        <Text style={styles.btnTExt} onPress={()=>navigation.navigate('SecondScreen')} >Click Me</Text>
        </View>
        
         </TouchableOpacity>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    btnStyle:{   
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:2,
    height: 50,
    borderRadius: 10,
    backgroundColor:'gray',
    borderColor:'gray'
    },
    btnTExt:{
  
    fontSize:20,
 
 
    }
})