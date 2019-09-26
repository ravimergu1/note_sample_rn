import React, { useState } from 'react'
import { Alert, View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {

    const [goal, setGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setGoal(enteredText);
    };

    const addGoalHandlerTest = () => {
        if (goal.trim() === '') {
            Alert.alert("goal should not be empty");
            return
        }
        props.addOnGoal(goal);
        setGoal('');
    }
    return (
        <Modal visible={props.visible} animated="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Goal" style={styles.textInput} value={goal} onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandlerTest} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Close" onPress={props.onClose} color='red' />
                    </View>
                </View>

            </View>
        </Modal>
    )
}



const styles = StyleSheet.create({

    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: "88%",
        marginBottom: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "40%",
        alignItems: "center"
    },
    button: {
        width: "40%"
    }
})

export default GoalInput