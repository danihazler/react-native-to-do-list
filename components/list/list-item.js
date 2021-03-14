import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const ListItem = ({ itemData, id, onDelete }) => {  
  return (
    <View style={styles.wrapper}>
      <Text style={styles.item}>
          {itemData.item.value}
      </Text>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#faf3dd',
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 2,
  },
  item: {
    color: '#118ab2',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  delete: {
    color: '#ed553b',
    fontWeight: 'bold',
    padding: 5,
  }
});
