import React, {useState} from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  Alert,
  Button
} from 'react-native';
import AddTtem from './Components/AddItem';
import Header from './Components/header';
import ListItem from './Components/listItem';

const App = () => {
const [items, setItems]= useState([
  {id: Math.floor(Math.random() * 10000), text: 'Milk'},
  {id: Math.floor(Math.random() * 10000), text: 'Eggs'},
  {id: Math.floor(Math.random() * 10000), text: 'Beer'},
  {id: Math.floor(Math.random() * 10000), text: 'Wine'},
  {id: Math.floor(Math.random() * 10000), text: 'Bread'},
])

const deleteItem = id =>{
  setItems(prevItems => {
    return prevItems.filter( item => item.id !== id)
  })
}

const addItem = text => {
  if (!text){
    Alert.alert('Error', 'Please add an item', [{text:'OK', onPress: () => console.log('OK Pressed')}], { cancelable: true });
  } else {
    setItems(prevItems => {
      return [ {id: Math.floor(Math.random() * 10000), text}, ...prevItems];
    });

  }
}

  return (
    <View style={styles.container}>
    <Header/>
    <AddTtem addItem={addItem} />
    <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});


export default App;
