import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity onPress = {props.onDelete.bind(this,props.id)}>
        <View style={styles.text}>
            <Text>{props.text}</Text>
        </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    text: {
        padding: 10,
        width: "100%",
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
        backgroundColor: '#ccc'
    }
})

export default GoalItem