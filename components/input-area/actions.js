import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export const Actions = ({
  addInput, 
  cleanInput
}) => {  
  return (
    <View style={styles.buttons}>
      <Button
        color='#1a936f' 
        title="Add" 
        onPress={addInput} 
      />
      <Button 
        color="red"
        title="Cancel" 
        onPress={cleanInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
