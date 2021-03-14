import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Actions } from './actions';

export const InputArea = ({
  handleInputChange, 
  addInput, 
  inputEntered, 
  cleanInput
}) => {  
  return (
    <View>
      <TextInput 
          style={styles.input} 
          placeholder="Add task..." 
          onChangeText={handleInputChange}
          value={inputEntered}
      />
      <Actions 
        cleanInput={cleanInput}
        addInput={addInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    padding: 5,
  }
});
