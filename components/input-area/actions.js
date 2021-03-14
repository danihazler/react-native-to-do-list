import React from 'react';
import { StyleSheet, View, Button, Platform } from 'react-native';

export const Actions = ({
  addInput, 
  cleanInput
}) => {  
  return (
    <View style={styles.buttons}>
      <View style={[styles.button, styles.add]}>
        <Button
          color='#3fada7' 
          title="Add" 
          onPress={addInput} 
          />
      </View>
      <View style={styles.button}>
        <Button 
          color="#b51b43"
          title="Cancel" 
          onPress={cleanInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginTop: 7,
  },
  button: {
    width: Platform.OS === 'android' ? '20%' : undefined
  },
  add: {
    marginRight: 5
  }
});
