import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{

    const friends = [
        {name: 'Friend #1', age: 23},
        {name: 'Friend #2', age: 25},
        {name: 'Friend #3', age: 57},
        {name: 'Friend #4', age: 36},
        {name: 'Friend #5', age: 15},
        {name: 'Friend #6', age: 77},
        {name: 'Friend #7', age: 36},
        {name: 'Friend #8', age: 35},
        {name: 'Friend #9', age: 45},
    ];

    /*
        Using flat list takes in a function to create elements from an array.
        Sort of like using .map in web react.
        the argument in the function isn't just our array item, it is an object with other properties as well.
        the item we want is in a property called 'item' (ex: element.item).
        So we can destructure it by using just {item}
    */
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return (<Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>)
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;