import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
const [text, setText] = useState('')

const onPress = () =>{
    addItem(text);
    setText('');
}

const onChange = (textValue) => setText(textValue)


    return (
        <View >
        <TextInput placeholder='Add Item ...' style={styles.input} onChangeText={onChange} value={text}/>
        <TouchableOpacity style={styles.btn} onPress={()=> onPress()}>
        <Text style={styles.btnText}><Icon name='plus' size={20}   /> Add Item</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    input: {
      height:60,
      padding: 8,
      fontSize: 16,
    },

    btn: {
    backgroundColor: '#c2bad8',
     padding:9,
     margin:5,
    },
    btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    },

  });

export default AddItem;
