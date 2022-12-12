import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView,} from 'react-native';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        {text: 'Купить молоко', key: '1'},
        {text: 'Помыть машину', key: '2'},
        {text: 'Купитть картошку', key: '3'},
        {text: 'Стать', key: '4'}])

    const addHandler = (text) => {
        setListOfItems((list) => {
            return [
                { text: text, key: Math.random().toString(36).substring(7) },
                ...list
            ]
        })
    }

    const deleteHandler = (key) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
        });
    }

    return (
        <View>
            <Header/>
            <Form addHandler={addHandler} />

            <ScrollView>
                <FlatList data={listOfItems} renderItem={({ item })=> (
                    <List el={item} deleteHandler={deleteHandler} />
                )} />
            </ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({


});
