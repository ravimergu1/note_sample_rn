import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalInput from "./components/GoalInput"
import GoalItem from './components/GoalItem';

export default function App() {

  const [goalsList, setGoalsList] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const addGoalHandler = enteredText => {
    setGoalsList(goalsList => [{ id: Math.random().toString(), value: enteredText }, ...goalsList]);
    setIsVisible(false);
  };

  const removeGoalHandler = goalId => {
    setGoalsList(goalsList => {
      return goalsList.filter((goal) => goal.id !== goalId)
    });
  }

  const onCloseAddNewNote=()=>{
    setIsVisible(false);
  }

  return (
    <View style={styles.container}>

      <Button title="Add New Goal" onPress={() => setIsVisible(true)} />
      <GoalInput onClose = {onCloseAddNewNote} visible={isVisible} addOnGoal={addGoalHandler} />
      <View>
        <FlatList keyExtractor={(item, index) => item.id}
          data={goalsList} renderItem={
            dataItem =>
              <GoalItem id={dataItem.item.id} onDelete={removeGoalHandler} text={dataItem.item.value} />
          } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
