import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem } from './list-item';

export const List = ({ list, deleteItem }) => {  
  return (
      <View>
        <FlatList
          // keyExtractor={(item, index) =>  `${item}${index}`} explained on addInput
          style={styles.container}
          data={list}
          renderItem={itemData => (
            <ListItem 
              itemData={itemData} 
              id={itemData.item.key} 
              onDelete={deleteItem} 
            />
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  item: {
    color: '#2a9d8f',
    fontSize: 18,
    paddingVertical: 5,
  }
});
