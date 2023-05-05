import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
const USER_DETAIL_KEY = '@User:Detail_KEY';

export default class LocalStorage {
  async setUserData(sData: any, onCompleted: any) {
    try {
        await AsyncStorage.setItem(sData, JSON.stringify(onCompleted));
    } catch (error) {
        console.log(error);   
    }
  }
  async getUserData(sData: string) {
    var result = {userInfo: null};
    try {
        const savedUser = await AsyncStorage.getItem(sData);
        const currentUser =savedUser!=null? JSON.parse(savedUser):null;
      
        return currentUser;
      } catch (error) {
        console.log(error);
      }
  }
}
