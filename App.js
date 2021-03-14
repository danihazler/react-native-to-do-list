import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { InputArea } from './components/input-area';
import { List } from './components/list';

export default function App() {
  const [inputEntered, setInputEntered]= useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (text) => {
    setInputEntered(text);
  }

  const addInput = () => {
    if(inputEntered === '') return;
    /*
    * key: Date.now().toString() because Flatlist demands a key
    * or you can use keyExtractor
    * setTaskList(currentTaskList => [...currentTaskList, inputEntered ]); 
    */ 
   // this is better than setTaskList([...taskList, inputEntered])
    setTaskList(currentTaskList => [
      ...currentTaskList, 
      { key: Date.now().toString(), value: inputEntered }
    ]);
    setInputEntered('');
  }

  const deleteItem = (itemKey) => {
    setTaskList(currentTaskList => {
      return currentTaskList.filter(
        itemList => itemList.key !== itemKey
      );
    })
  }

  const cleanInput = () => {
    setInputEntered('');
  }
  
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>To do list:</Text>
      <InputArea 
        handleInputChange={handleInputChange} 
        addInput={addInput} 
        inputEntered={inputEntered}
        cleanInput={cleanInput}
      />
      <View>
        <List 
          list={taskList} 
          deleteItem={deleteItem} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f6dfbc',
    paddingVertical: 25,
    paddingHorizontal: 10
  },
  title: {
    color: '#1a936f',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
    textTransform: 'uppercase'
  }
});
