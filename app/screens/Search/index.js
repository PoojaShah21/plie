import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './styles';
import BaseColor from '../../config/colors';

const Search = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={BaseColor.white}
        translucent={true}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

export default Search;
