import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {storeData} from '../redux/AddSlice'

import LocalStorage from '../services/LocalStorage';
let local = new LocalStorage();

const SecondScreen = ({navigation}: any) => {
  const [text, setText] = useState('');
  const sliceData = useSelector(state => state.add.textItems);
  const [currentData,setCurrentData]=useState(sliceData)
  console.log(currentData)
  const dispatch = useDispatch();

  const testfunc = async () => {
    const Data = await local.getUserData('data');
    console.log(Data);
    setCurrentData(Data.kuchbhi)

  };

  useEffect(() => {
    testfunc()
    }, [])
   
    
  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{backgroundColor: 'lightgray', borderRadius: 10, marginTop: 20}}>
        <TextInput
          placeholder="Please Enter Text"
          style={{padding: 10, fontSize: 20}}
          //@ts-ignore
          onChangeText={value => setText(value)}
          value={text}
          
        />
      </View>
      <View style={{marginTop: 10, marginHorizontal: 30}}>
        <TouchableOpacity>
          <View style={styles.btnStyle}>
            <Text
              style={styles.btnTExt}
              //@ts-ignore
              onPress={() => {
               if(text== ''){
               Alert.alert('Message','Plz Enter Some Text')}
               else{
                setCurrentData([...currentData,text])
                dispatch(storeData([...currentData,text]));
                setText('')

              }
                }}>
              Click Me
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{padding: 10}}>
        
        {currentData.map((textItem, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ThirdScreen', {textItem})}>
            <Text key={index}>{textItem}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray',
    borderColor: 'gray',
  },
  btnTExt: {
    fontSize: 20,
  },
});
