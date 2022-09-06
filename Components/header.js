import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.text}>Shopping List</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    header: {
      height:60,
      padding: 15,
      backgroundColor: 'darkslateblue',
    },

    text: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
    },

  });

export default Header;
