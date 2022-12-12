import React from 'react';
import {StyleSheet, TouchableHighlight, Text,ScrollView} from 'react-native';

export default function List({el, deleteHandler}) {
    return (
        <TouchableHighlight underlayColor='red' onPress={() => deleteHandler(el.key)}>

            <Text style={styles.text}>{el.text}</Text>

        </TouchableHighlight>
    );
}


const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',
        overflow: 'scroll'



    },
});