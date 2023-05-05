import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({props}:any) => {
  return (
    <View>
     <TouchableOpacity>
        <View style={[styles.btnStyle,props.btnTextStyle]}>
        <Text style={[styles.btnTExt,props.btnTextStyle]}
        onPress={props.onPress} >{props.Text}</Text>
        </View>
        
         </TouchableOpacity>
    </View>
  )
}

export default CustomButton

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